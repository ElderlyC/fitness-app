import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function CalRatio({ protein, carbs, fat }) {
  const proteinPercent = protein * 4;
  const carbsPercent = carbs * 4;
  const fatPercent = fat * 9;
  const total = proteinPercent + carbsPercent + fatPercent;

  return (
    <div style={{ width: 250 }}>
      Source of Calories
      <PieChart
        startAngle={-90}
        data={[
          {
            title: "Protein",
            value: proteinPercent || 1 / 3,
            color: "#299fe3",
          },
          { title: "Carbs", value: carbsPercent || 1 / 3, color: "#edcd1a" },
          { title: "Fat", value: fatPercent || 1 / 3, color: "#c90c9d" },
        ]}
      />
      <div className="legend">
        <div className="protein-color legend-item">
          <span>&nbsp;</span>
          Protein{" "}
          {proteinPercent ? ((proteinPercent / total) * 100).toFixed(0) : ""}%
        </div>
        <div className="carbs-color legend-item">
          <span>&nbsp;</span>
          Carbs {carbsPercent ? ((carbsPercent / total) * 100).toFixed(0) : ""}%
        </div>
        <div className="fat-color legend-item">
          <span>&nbsp;</span>
          Fat {fatPercent ? ((fatPercent / total) * 100).toFixed(0) : ""}%
        </div>
      </div>
    </div>
  );
}
