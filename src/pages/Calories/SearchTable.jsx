import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import CalRatio from "./CalRatio";
import { useEffect } from "react";

const columns = [
  { field: "foodItem", headerName: "Food Item", width: 180, sortable: false },
  { field: "quantity", headerName: "Quantity (g)", width: 90, sortable: false },
  { field: "calories", headerName: "Calories", width: 75, sortable: false },
  { field: "protein", headerName: "Protein (g)", width: 85, sortable: false },
  { field: "carbs", headerName: "Carbs (g)", width: 80, sortable: false },
  { field: "fat", headerName: "Fat (g)", width: 70, sortable: false },
];

export default function SearchTable({ table }) {
  const [goalCals, setGoalCals] = useState(
    () => JSON.parse(localStorage.getItem("goalCals")) || ""
  );

  const rows = table.map((food, index) => ({
    id: index + 1,
    foodItem: food.foodItem,
    quantity: food.quantity,
    calories: food.calories,
    protein: food.protein,
    carbs: food.carbs,
    fat: food.fat,
  }));
  // Calculate the sums for each column
  const total = {
    id: "total",
    foodItem: "Total",
    quantity: table
      .reduce((total, food) => total + (+food.quantity || 0), 0)
      .toFixed(0),
    calories: +table
      .reduce((total, food) => total + (+food.calories || 0), 0)
      .toFixed(0),
    protein: table
      .reduce((total, food) => total + (+food.protein || 0), 0)
      .toFixed(1),
    carbs: table
      .reduce((total, food) => total + (+food.carbs || 0), 0)
      .toFixed(1),
    fat: table.reduce((total, food) => total + (+food.fat || 0), 0).toFixed(1),
  };

  const remainingCals = total.calories - goalCals || 0;

  useEffect(() => {
    localStorage.setItem("goalCals", JSON.stringify(goalCals));
  }, [goalCals]);

  return (
    <div style={{ width: 600 }}>
      <div style={{ width: 600, display: "flex" }}>
        <div style={{ height: 378, minWidth: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            rowHeight={40}
            rowsPerPageOptions={[100]}
          />
        </div>
        <div style={{ position: "absolute", right: "15%" }}>
          {total && (
            <CalRatio
              protein={total.protein}
              carbs={total.carbs}
              fat={total.fat}
            />
          )}
        </div>
      </div>

      <div style={{ width: 600, height: 42 }}>
        <DataGrid
          rows={[total]}
          columns={columns}
          hideFooter={true}
          headerHeight={0}
          rowHeight={40}
        />
      </div>
      <div>
        <label htmlFor="goal">Set Goal Calories</label>
        <input
          id="goal"
          type="number"
          value={goalCals}
          onChange={(event) => setGoalCals(event.target.value)}
        />
        <p>
          You are{" "}
          <span style={{ color: remainingCals > 0 ? "red" : "green" }}>
            {Math.abs(remainingCals)}
          </span>{" "}
          calories
          {remainingCals < 0 ? " under" : " over"} your goal.
        </p>
        <p>
          Use the{" "}
          <a
            href="Maintenance-Calories-Calculator"
            style={{ fontWeight: "bold", color: "blue" }}
          >
            Maintenance Calories Calculator
          </a>{" "}
          to find an appropriate daily caloric intake for yourself.
        </p>
      </div>
    </div>
  );
}
