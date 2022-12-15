import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Day", width: 100, sortable: false },
  { field: "weight", headerName: "Weight", width: 100, sortable: false },
  { field: "change", headerName: "Change", width: 100, sortable: false },
];

const rows = [
  { id: 1, weight: "67.6", change: null },
  { id: 2, weight: "67.9", change: "+0.3" },
  { id: 3, weight: "67.8", change: "-0.1" },
  { id: 4, weight: "68.3", change: "+0.5" },
  { id: 5, weight: "67.7", change: "-0.6" },
  { id: 6, weight: "67.5", change: "-0.2" },
  { id: 7, weight: null, change: null },
  { id: 8, weight: null, change: null },
  { id: 9, weight: null, change: null },
  { id: 10, weight: null, change: null },
  { id: 11, weight: null, change: null },
  { id: 12, weight: null, change: null },
  { id: 13, weight: null, change: null },
  { id: 14, weight: null, change: null },
  { id: 15, weight: null, change: null },
  { id: 16, weight: null, change: null },
  { id: 17, weight: null, change: null },
  { id: 18, weight: null, change: null },
  { id: 19, weight: null, change: null },
  { id: 20, weight: null, change: null },
  { id: 21, weight: null, change: null },
  { id: 22, weight: null, change: null },
  { id: 23, weight: null, change: null },
  { id: 24, weight: null, change: null },
  { id: 25, weight: null, change: null },
  { id: 26, weight: null, change: null },
  { id: 27, weight: null, change: null },
  { id: 28, weight: null, change: null },
  { id: 29, weight: null, change: null },
  { id: 30, weight: null, change: null },
  { id: 31, weight: null, change: null },
  { id: 32, weight: null, change: null },
  { id: 33, weight: null, change: null },
  { id: 34, weight: null, change: null },
  { id: 35, weight: null, change: null },
  { id: 36, weight: null, change: null },
  { id: 37, weight: null, change: null },
  { id: 38, weight: null, change: null },
  { id: 39, weight: null, change: null },
];

export default function DataTable() {
  return (
    <div style={{ height: 370, width: 400, margin: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={31}
        rowsPerPageOptions={[]}
        checkboxSelection={false}
      />
    </div>
  );
}
