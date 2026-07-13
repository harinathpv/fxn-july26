import { polarPoints } from "@/lib/diagram";

const functions = [
  { label: "Finance", color: "#B8863B" },
  { label: "GTM", color: "#1F6F68" },
  { label: "Technology", color: "#4C6FA5" },
  { label: "People", color: "#A5677E" },
  { label: "Product", color: "#6B8F71" },
  { label: "Operations", color: "#8A7F6B" },
];
const cx = 240;
const cy = 230;
const r = 150;

export default function AllocationDiagram() {
  const points = polarPoints(cx, cy, r, functions.length);

  return (
    <div className="hero-visual">
      <svg className="node-svg" viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg">
        <circle className="core" cx={cx} cy={cy} r={r} />
        <g>
          {points.map((p, i) => (
            <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} />
          ))}
        </g>
        <g>
          {points.map((p, i) => {
            const f = functions[i];
            return (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="34" className="fn-node" fill={f.color} />
                <text x={p.x} y={p.y + 4} textAnchor="middle">{f.label}</text>
                <circle r="4" fill={f.color}>
                  <animateMotion
                    dur={`${(5 + i * 0.6).toFixed(1)}s`}
                    repeatCount="indefinite"
                    path={`M${cx},${cy} L${p.x},${p.y} L${cx},${cy}`}
                  />
                </circle>
              </g>
            );
          })}
          <text x={cx} y={cy - 4} textAnchor="middle" className="center-label">Your Company</text>
          <text x={cx} y={cy + 16} textAnchor="middle" className="center-sub">Subscribed Hours</text>
        </g>
      </svg>
    </div>
  );
}
