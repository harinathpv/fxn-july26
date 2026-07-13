import { polarPoints } from "@/lib/diagram";

const labels = ["Strategy", "Revenue", "Finance", "Technology", "People", "Operations"];
const cx = 240;
const cy = 230;
const r = 150;

export default function HeroDiagram() {
  const points = polarPoints(cx, cy, r, labels.length);

  return (
    <div className="hero-visual">
      <svg className="node-svg" viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg">
        <circle className="core" cx={cx} cy={cy} r="90" />
        <circle className="core" cx={cx} cy={cy} r="150" />
        <g>
          {points.map((p, i) => (
            <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} />
          ))}
        </g>
        <g>
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="34" className={`fn-node${i % 2 === 0 ? " active" : ""}`} />
              <text x={p.x} y={p.y + 4} textAnchor="middle">{labels[i]}</text>
            </g>
          ))}
          <text x={cx} y={cy - 4} textAnchor="middle" className="center-label">FxN</text>
          <text x={cx} y={cy + 16} textAnchor="middle" className="center-sub">Pods · LaaS</text>
        </g>
      </svg>
    </div>
  );
}
