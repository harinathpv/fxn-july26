import { polarPoints } from "@/lib/diagram";

const specialists = ["Finance", "GTM", "Tech", "People", "Product", "Ops"];
const cx = 210;
const cy = 200;
const outerR = 150;
const innerR = 80;

export default function RelationshipDiagram() {
  const outerPoints = polarPoints(cx, cy, outerR, specialists.length);
  const innerPoints = polarPoints(cx, cy, innerR, specialists.length);

  return (
    <div className="rel-visual">
      <svg className="node-svg" viewBox="0 0 420 400" xmlns="http://www.w3.org/2000/svg">
        <circle className="core" cx={cx} cy={cy} r={innerR} stroke="#3A5670" />
        <circle className="core" cx={cx} cy={cy} r={outerR} stroke="#233649" />
        <g>
          {outerPoints.map((p, i) => (
            <line key={i} x1={innerPoints[i].x} y1={innerPoints[i].y} x2={p.x} y2={p.y} />
          ))}
        </g>
        <g>
          {outerPoints.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="28" fill="#16283F" stroke="#3A5670" strokeWidth="1" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" style={{ fontSize: "10px" }}>{specialists[i]}</text>
            </g>
          ))}
          <circle cx={cx} cy={cy} r="40" fill="#0E1E32" stroke="#3A5670" />
          <text x={cx} y={cy + 4} textAnchor="middle" className="center-label">Client</text>
          <circle cx={cx} cy={cy - innerR} r="34" fill="#1F6F68" />
          <text x={cx} y={cy - innerR - 3} textAnchor="middle" style={{ fontSize: "9.5px" }}>Relationship</text>
          <text x={cx} y={cy - innerR + 10} textAnchor="middle" style={{ fontSize: "9.5px" }}>Lead</text>
        </g>
      </svg>
    </div>
  );
}
