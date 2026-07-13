export type Point = { x: number; y: number };

export function polarPoints(
  cx: number,
  cy: number,
  r: number,
  count: number,
  startAngleDeg = -90
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const angle = ((2 * Math.PI) / count) * i + (startAngleDeg * Math.PI) / 180;
    points.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return points;
}
