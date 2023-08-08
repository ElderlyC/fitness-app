// SearchHistory.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "foodItem", headerName: "Food Item", width: 130, sortable: false },
  { field: "weight", headerName: "Weight", width: 70, sortable: false },
  { field: "calories", headerName: "Calories", width: 70, sortable: false },
  { field: "carbs", headerName: "Carbs", width: 70, sortable: false },
  { field: "fibre", headerName: "Fibre", width: 70, sortable: false },
  { field: "keto", headerName: "Is It Keto?", width: 80, sortable: false },
  { field: "max", headerName: "Daily Maximum", width: 110, sortable: false },
];

const SearchHistory = ({ history }) => {
  const rows = history.map((search, index) => ({
    id: index + 1,
    foodItem: search.foodItem,
    weight: `${search.weight}g`,
    calories: Math.floor((search.nutrients.ENERC_KCAL * search.weight) / 100),
    carbs: ((search.nutrients.CHOCDF * search.weight) / 100).toFixed(1),
    fibre: ((search.nutrients.FIBTG * search.weight) / 100).toFixed(1),
    keto:
      (search.nutrients.CHOCDF * search.weight) / 100 -
        (search.nutrients.FIBTG * search.weight) / 100 <
      20
        ? "Yes"
        : "No",
    max: `${Math.floor(
      (20 / (search.nutrients.CHOCDF - search.nutrients.FIBTG)) * 100
    )}g`,
  }));

  return (
    <div style={{ height: 378, width: 610, marginTop: 55 }}>
      <h5>Search History</h5>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={31}
        rowsPerPageOptions={[31]}
        checkboxSelection={false}
        hideFooter={true}
        rowHeight={40}
      />
    </div>
  );
};

export default SearchHistory;
