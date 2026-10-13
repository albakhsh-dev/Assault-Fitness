import React, { useEffect, useRef } from 'react';

export interface BinaryOrbitsProps {
  /** Array of colors from inner core to outer arms */
  colors?: string[];
  /** Display mode: 'glow' (luminous on dark bg), 'ink' (stippled on light bg), or 'auto' */
  mode?: 'glow' | 'ink' | 'auto';
  /** Number of star particles (default: 4500) */
  stars?: number;
  /** Base star size in pixels (default: 1.4) */
  starSize?: number;
  /** Overall scale multiplier (default: 1) */
  scale?: number;
  /** Number of spiral arms (default: 2) */
  arms?: number;
  /** Twist tightness of spiral arms (default: 4.2) */
  twist?: number;
  /** Concentration of stars along the spiral arms (0 to 1, default: 0.85) */
  armStrength?: number;
  /** Galactic core brightness multiplier (default: 1.2) */
  core?: number;
  /** Vertical disk thickness for 3D depth (default: 0.28) */
  thickness?: number;
  /** Tilt angle in degrees (default: 58) */
  tilt?: number;
  /** Roll angle in degrees (default: 28) */
  roll?: number;
  /** Orbital stream velocity (default: 0.5) */
  speed?: number;
  /** Interactive mouse parallax (default: true) */
  interactive?: boolean;
  /** Horizontal center position as fraction of width (0 to 1) */
  centerX?: number;
  /** Vertical center position as fraction of height (0 to 1) */
  centerY?: number;
  /** Custom CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

interface Star {
  r: number;             // normalized distance from center (0 to 1)
  theta0: number;        // initial angle
  armIndex: number;      // assigned spiral arm
  scatterDist: number;   // deviation from arm center
  scatterAngle: number;
  zOffset: number;       // vertical 3D displacement
  size: number;
  speedMultiplier: number;
  colorRgb: [number, number, number];
  alpha: number;
  shimmerSpeed: number;
  shimmerOffset: number;
}

// Helper to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  let clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const intVal = parseInt(clean, 16);
  if (isNaN(intVal)) return [230, 197, 138];
  return [
    (intVal >> 16) & 255,
    (intVal >> 8) & 255,
    intVal & 255
  ];
}

// Interpolate across an array of RGB colors based on factor t (0 to 1)
function interpolatePalette(paletteRgb: [number, number, number][], t: number): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, t));
  const count = paletteRgb.length;
  if (count === 1) return paletteRgb[0];

  const scaled = clamped * (count - 1);
  const idx = Math.floor(scaled);
  const frac = scaled - idx;
  const nextIdx = Math.min(idx + 1, count - 1);

  const c1 = paletteRgb[idx];
  const c2 = paletteRgb[nextIdx];

  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * frac),
    Math.round(c1[1] + (c2[1] - c1[1]) * frac),
    Math.round(c1[2] + (c2[2] - c1[2]) * frac)
  ];
}

export const BinaryOrbits: React.FC<BinaryOrbitsProps> = ({
  colors = ['#FFF8ED', '#E6C58A', '#C89B52', '#8C672A', '#3A270D'],
  mode = 'glow',
  stars = 4500,
  starSize = 1.35,
  scale = 1.0,
  arms = 2,
  twist = 4.2,
  armStrength = 0.85,
  core = 1.2,
  thickness = 0.28,
  tilt = 58,
  roll = 28,
  speed = 0.55,
  interactive = true,
  centerX,
  centerY,
  className = '',
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Convert hex palette to RGB
    const paletteRgb = colors.map(hexToRgb);

    // Initialize stars array
    const starList: Star[] = [];
    const isInk = mode === 'ink';

    for (let i = 0; i < stars; i++) {
      const isCoreStar = Math.random() < 0.25;
      let r: number;
      let zOffset: number;
      let scatterDist: number;

      if (isCoreStar) {
        // Core bulge distribution: dense, spherical cluster
        r = Math.pow(Math.random(), 2.2) * 0.35;
        zOffset = (Math.random() - 0.5) * thickness * 1.6 * (1 - r);
        scatterDist = Math.random() * 0.2;
      } else {
        // Disk / arm stars: logarithmic radial distribution
        r = 0.15 + Math.pow(Math.random(), 0.85) * 0.85;
        zOffset = (Math.random() - 0.5) * thickness * (1 - r * 0.5);
        // Spread inversely proportional to armStrength
        const armSpread = (1 - armStrength) * 0.55 + 0.05;
        scatterDist = (Math.random() - 0.5) * armSpread * (0.3 + 0.7 * r);
      }

      const armIndex = i % arms;
      const baseArmAngle = (armIndex * (2 * Math.PI)) / arms;
      const spiralAngle = Math.pow(r, 0.75) * twist;
      const theta0 = baseArmAngle + spiralAngle;

      // Color transition from core white/gold to outer arm gold/amber
      const colorFactor = isCoreStar ? r * 0.8 : 0.2 + r * 0.8;
      const colorRgb = interpolatePalette(paletteRgb, colorFactor);

      // Particle size based on proximity to center and variation
      const baseSize = starSize * (0.6 + Math.random() * 1.2);
      const sizeMultiplier = isCoreStar ? 1.2 : 0.7 + 0.4 * (1 - r);

      // Differential orbital rotation speed (inner stars orbit faster)
      const speedMultiplier = 1.0 / (Math.pow(r, 0.6) + 0.25);

      starList.push({
        r,
        theta0,
        armIndex,
        scatterDist,
        scatterAngle: Math.random() * Math.PI * 2,
        zOffset,
        size: baseSize * sizeMultiplier,
        speedMultiplier,
        colorRgb,
        alpha: isInk ? 0.4 + Math.random() * 0.5 : 0.35 + Math.random() * 0.65,
        shimmerSpeed: 1 + Math.random() * 3,
        shimmerOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.targetX = nx * 14;
      mouseRef.current.targetY = ny * 10;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001 * speed;

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      // On mobile viewports, intelligently frame the galaxy towards the upper-right (0.75, 0.22)
      // so it never covers mobile text, while keeping perfect 50% center on desktop
      const posX = centerX !== undefined ? centerX : (isMobile ? 0.75 : 0.5);
      const posY = centerY !== undefined ? centerY : (isMobile ? 0.22 : 0.5);
      const responsiveScale = isMobile ? scale * 0.78 : scale;
      const responsiveCore = isMobile ? core * 0.6 : core;

      const cx = width * posX;
      const cy = height * posY;
      const maxRadius = Math.min(width, height) * 0.46 * responsiveScale;

      // 3D angles in radians
      const radTilt = ((tilt + mouseRef.current.y) * Math.PI) / 180;
      const radRoll = ((roll + mouseRef.current.x) * Math.PI) / 180;

      const cosTilt = Math.cos(radTilt);
      const sinTilt = Math.sin(radTilt);
      const cosRoll = Math.cos(radRoll);
      const sinRoll = Math.sin(radRoll);

      const focalLength = 800;

      // Set blending mode
      ctx.globalCompositeOperation = isInk ? 'source-over' : 'lighter';

      // 1. Draw Central Galactic Glow Bulge
      if (!isInk && responsiveCore > 0) {
        const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius * 0.28 * responsiveCore);
        const [r0, g0, b0] = paletteRgb[0];
        const [r1, g1, b1] = paletteRgb[Math.min(1, paletteRgb.length - 1)];
        const [r2, g2, b2] = paletteRgb[Math.min(2, paletteRgb.length - 1)];

        coreGradient.addColorStop(0, `rgba(${r0}, ${g0}, ${b0}, ${0.55 * responsiveCore})`);
        coreGradient.addColorStop(0.25, `rgba(${r1}, ${g1}, ${b1}, ${0.28 * responsiveCore})`);
        coreGradient.addColorStop(0.6, `rgba(${r2}, ${g2}, ${b2}, ${0.08 * responsiveCore})`);
        coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(cx, cy, maxRadius * 0.28 * responsiveCore, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render each streaming star particle
      for (let i = 0; i < starList.length; i++) {
        const star = starList[i];

        // Current orbital angle with streaming motion
        const currentAngle = star.theta0 + elapsed * star.speedMultiplier;

        // Position in galactic plane
        const radiusPx = star.r * maxRadius;
        const scatterX = Math.cos(star.scatterAngle) * star.scatterDist * maxRadius;
        const scatterY = Math.sin(star.scatterAngle) * star.scatterDist * maxRadius;

        const rawX = Math.cos(currentAngle) * radiusPx + scatterX;
        const rawY = Math.sin(currentAngle) * radiusPx + scatterY;
        const rawZ = star.zOffset * maxRadius;

        // Apply Roll (rotation around Z axis)
        const rx = rawX * cosRoll - rawY * sinRoll;
        const ry = rawX * sinRoll + rawY * cosRoll;

        // Apply Tilt (rotation around X axis)
        const py = ry * cosTilt - rawZ * sinTilt;
        const pz = ry * sinTilt + rawZ * cosTilt;

        // Perspective projection
        const pScale = focalLength / (focalLength + pz);
        const screenX = cx + rx * pScale;
        const screenY = cy + py * pScale;

        // Shimmering alpha
        const shimmer = 0.8 + 0.2 * Math.sin(time * 0.002 * star.shimmerSpeed + star.shimmerOffset);
        const finalAlpha = star.alpha * shimmer * Math.max(0.15, Math.min(1.2, pScale));

        const radius = Math.max(0.4, star.size * pScale);
        const [cr, cg, cb] = star.colorRgb;

        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [colors, mode, stars, starSize, scale, arms, twist, armStrength, core, thickness, tilt, roll, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none block ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default BinaryOrbits;
