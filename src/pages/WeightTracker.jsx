import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Day", width: 60, sortable: false },
  { field: "weight", headerName: "Weight", width: 120, sortable: false },
  { field: "change", headerName: "Change", width: 120, sortable: false },
];

const columns2 = [
  { field: "id", headerName: "Week", width: 10, sortable: false },
  {
    field: "weekEnding",
    headerName: "Week Ending",
    width: 100,
    sortable: false,
  },
  { field: "average", headerName: "Average", width: 70, sortable: false },
  { field: "change", headerName: "Change", width: 70, sortable: false },
];

const WeightTracker = () => {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayLong = today.toLocaleString("en-AU", {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const offset = today.getTimezoneOffset() * 60000; // convert to milliseconds
  const todayString = new Date(today.getTime() - offset)
    .toISOString()
    .split("T")[0];

  const currentMonthNum = today.toLocaleString("en-AU", {
    month: "numeric",
  });
  const currentYear = today.toLocaleString("en-AU", {
    year: "numeric",
  });

  const [monthCount, setMonth] = useState(currentMonthNum);
  const [yearCount, setYear] = useState(currentYear);
  const [userWeights, setUserWeights] = useState(
    () => JSON.parse(localStorage.getItem("userWeights")) || []
  );
  const [selectedDate, setSelectedDate] = useState(todayString);
  const [selectedWeight, setSelectedWeight] = useState();
  const [showTable, setShowTable] = useState(false);

  const monthName = months[monthCount - 1];

  const addWeightHandler = (e) => {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const weight = +document.getElementById("weight").value;
    document.getElementById("weight").value = "";

    // Check if a weight object with the same date already exists
    const existingWeight = userWeights.find((item) => item.date === date);
    if (existingWeight) {
      // Display an error message or handle the duplicate entry as needed
      console.log("Weight entry already exists for this date");
      return;
    }

    setUserWeights((prev) =>
      [...prev, { date, weight }].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    );
  };

  function addWeightData(text) {
    const lines = text.split("\n");
    const weightData = lines.map((line) => {
      const [dateStr, weightStr] = line.split("\t");
      const dateParts = dateStr.split(" ");
      const day = dateParts[0]
        .replace("th", "")
        .replace("st", "")
        .replace("nd", "")
        .replace("rd", "");
      const month = `${monthCount}`.padStart(2, "0");
      const year = yearCount;
      const isoDate = `${year}-${month}-${day.padStart(2, "0")}`;
      const weight = parseFloat(weightStr);
      return { date: isoDate, weight };
    });
    return weightData;
  }

  const sendToConsole = (e) => {
    e.preventDefault();
    setMonth((prevMonth) => +prevMonth + 1);
    if (monthCount === 12) {
      setYear((prevYear) => +prevYear + 1);
      setMonth(1);
    }
    const textArea = document.getElementById("record-list");
    console.log(textArea.value);
    const weightText = document.getElementById("record-list").value;
    const addedWeights = addWeightData(weightText);
    console.log(addedWeights);

    setUserWeights(userWeights.concat(addedWeights));
    setUserWeights((prev) =>
      prev.sort((a, b) => new Date(a.date) - new Date(b.date))
    ); // Sort the userWeights array by date
    localStorage.setItem("userWeights", JSON.stringify(userWeights));
    document.getElementById("record-list").value = "";
  };

  const prevMonthHandler = () => {
    if (monthCount === 1) {
      setMonth(12);
      setYear((year) => +year - 1);
    } else {
      setMonth((month) => +month - 1);
    }
  };

  const nextMonthHandler = () => {
    if (monthCount === 12) {
      setMonth(1);
      setYear((year) => +year + 1);
    } else {
      setMonth((month) => +month + 1);
    }
  };

  const handleToggle = () => {
    setShowTable((prev) => !prev);
  };

  const dateChangeHandler = (e) => {
    setSelectedDate(e.target.value);
    const selectedDateObj = new Date(e.target.value);
    setMonth(selectedDateObj.getMonth() + 1);
    setYear(selectedDateObj.getFullYear());
  };

  const deleteLastHandler = () => {
    setUserWeights((prevWeights) => prevWeights.slice(0, -1));
  };

  useEffect(() => {
    setSelectedWeight(
      userWeights.find((item) => item.date === selectedDate)?.weight || null
    );
  }, [userWeights, selectedDate]);
  useEffect(() => {
    document.getElementById("weight").value = selectedWeight;
  }, [selectedWeight]);

  useEffect(() => {
    localStorage.setItem("userWeights", JSON.stringify(userWeights));
  }, [userWeights]);

  const currentMonthList = userWeights.filter((record) =>
    record.date.includes(
      yearCount + "-" + monthCount.toString().padStart(2, "0")
    )
  );
  // a month array that takes all values from a given month
  const rows = currentMonthList.map((item, index, array) => {
    const id = Number(item.date.split("-")[2]);
    const weight = item.weight?.toFixed(1);
    const previousWeight = array[index - 1]?.weight || null;
    const change =
      previousWeight !== null ? (weight - previousWeight).toFixed(1) : null;

    return { id, weight, change };
  });

  // Week 1 should be 8 weeks prior to the last day of the currentMonthList
  const lastDay =
    currentMonthList.slice(-1)[0]?.date || userWeights.slice(-1)[0]?.date;
  const weekOneStart =
    lastDay &&
    new Date(new Date(lastDay) - 55 * 1000 * 60 * 60 * 24)
      .toISOString()
      .split("T")[0];

  const eightWeeksWeights = userWeights.filter((record) => {
    const weightDate = new Date(record.date);
    return (
      weightDate >= new Date(weekOneStart) && weightDate <= new Date(lastDay)
    );
  });

  let eightWeeksArray = [];
  for (let i = 0; i < 8; i++) {
    const weekArray = eightWeeksWeights.filter((record) => {
      const weightDate = new Date(record.date);
      return (
        weightDate <=
          new Date(
            new Date(weekOneStart).getTime() + (6 + 7 * i) * 1000 * 60 * 60 * 24
          ) &&
        weightDate >=
          new Date(
            new Date(weekOneStart).getTime() + 7 * i * 1000 * 60 * 60 * 24
          )
      );
    });

    const average = (
      weekArray.reduce((total, current) => total + current.weight, 0) /
      weekArray.length
    ).toFixed(1);

    eightWeeksArray.push({
      id: i + 1,
      weekEnding: new Date(weekArray.slice(-1)[0]?.date).toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
        }
      ),
      average,
      change: "",
    });
  }

  eightWeeksArray.forEach((week, index, array) => {
    if (week.id > 1) {
      week.change = (week.average - array[week.id - 2].average).toFixed(1);
      if (week.change > 0) {
        week.change = "+" + week.change;
      }
    }
  });

  const rows1 = rows.slice(0, 16);
  const rows2 = rows.slice(16, 31);
  const firstWeight = currentMonthList[0]?.weight;
  const lastWeight = currentMonthList.slice(-1)[0]?.weight;
  const totalChange = (lastWeight - firstWeight).toFixed(1);
  const sign = totalChange > 0 ? "+" : "";
  rows2.push({
    id: "Total:",
    weight: firstWeight + " -> " + lastWeight,
    change: sign + totalChange + "kg",
  });

  const pastSevenWeights = userWeights.slice(-7);
  const pastSevenText = "Past Week Average: ";

  const pastSevenAverage = (
    pastSevenWeights.reduce((total, current) => {
      return total + current.weight;
    }, 0) / 7
  ).toFixed(1);

  return (
    <div style={{ width: 640 }}>
      <HomeButton />
      <h2 style={{ fontSize: 26, margin: 15 }}>Weight Tracker</h2>
      <p style={{ margin: 5 }}>
        {pastSevenText + pastSevenAverage}
        &emsp;&emsp;Past 8 Weeks:
        <input
          id="toggleCheckbox"
          type="checkbox"
          checked={showTable}
          onChange={handleToggle}
        />
      </p>

      <form style={{ fontSize: 20 }}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          defaultValue={todayString}
          onChange={dateChangeHandler}
        />
        <label htmlFor="weight">Weight:</label>
        <input id="weight" type="number" step="0.1" style={{ fontSize: 20 }} />
        <button type="button" onClick={addWeightHandler}>
          Add Weight Record
        </button>

        <button type="button" onClick={deleteLastHandler}>
          Delete Last Record
        </button>
      </form>

      <div id="month-weight-display" style={{ marginTop: 0 }}>
        <button onClick={prevMonthHandler}>Previous</button>
        <button onClick={nextMonthHandler}>Next</button>

        <p style={{ fontSize: 24, margin: 3 }}>
          {monthName} {yearCount}
        </p>
        <div id="weightdisplay">
          <h4 style={{ fontSize: 10, margin: 3 }}>Last Updated: {todayLong}</h4>
        </div>
        {showTable && (
          <div style={{ position: "fixed", right: "10%" }}>
            <div style={{ flex: 1, height: 363, width: 293, margin: "auto" }}>
              <DataGrid
                rows={eightWeeksArray}
                columns={columns2}
                checkboxSelection={false}
                headerHeight={40}
                hideFooter={true}
                rowHeight={40}
              />
            </div>
          </div>
        )}

        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, height: 642, width: 400, margin: "auto" }}>
            <DataGrid
              rows={rows1}
              columns={columns}
              pageSize={31}
              rowsPerPageOptions={[31]}
              checkboxSelection={false}
              headerHeight={0}
              hideFooter={true}
              rowHeight={40}
            />
          </div>
          <div style={{ flex: 1, height: 642, width: 400, margin: "auto" }}>
            <DataGrid
              rows={rows2}
              columns={columns}
              pageSize={31}
              rowsPerPageOptions={[31]}
              checkboxSelection={false}
              headerHeight={0}
              hideFooter={true}
              rowHeight={40}
            />
          </div>
        </div>
      </div>

      <div id="data-importer">
        <form onSubmit={sendToConsole}>
          <label style={{ fontSize: 18 }} htmlFor="record-list">
            Import weights for selected month
          </label>
          <textarea
            id="record-list"
            placeholder="1st 70.3 &#xa;2nd 70.6 etc."
          ></textarea>
          <button type="submit">Import Values</button>
        </form>
      </div>
    </div>
  );
};

export default WeightTracker;
