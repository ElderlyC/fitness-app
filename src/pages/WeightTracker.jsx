import React, { useState } from "react";
import { useEffect } from "react";
import HomeButton from "../components/HomeButton";

const WeightTracker = () => {
  const [newWeight, setWeight] = useState("");
  const [listItems, setListItems] = useState([]);

  const getDate = () => {
    document.getElementById("key").textContent = "Key: " + new Date().getTime();
    document.getElementById("date").textContent =
      "Date: " + new Date().toLocaleDateString();
    setWeight("Weight: " + document.getElementById("weight").value);
  };
  //Change key value pairs to 1 pair: 'userWeights' : [{"date":"2022. 12. 2.","weight":"67.5"},{"date":"2022. 12. 3.","weight":"67.3"},{"date":"2022. 12. 4.","weight":"66.5"}]
  // 1 array of objects, push for every new entry
  const addToStorage = () => {
    window.localStorage.setItem(
      new Date().getTime(),
      JSON.stringify({
        date: new Date().toLocaleDateString(),
        weight: document.getElementById("weight").value,
      })
    );
    setListItems(() => {
      const listArray = [];
      const sortedKeys = Object.keys(localStorage).sort();
      for (let i = 0; i < sortedKeys.length; i++) {
        listArray.unshift({
          id: sortedKeys[i],
          content:
            "Date: " +
            JSON.parse(localStorage.getItem(sortedKeys[i])).date +
            "Weight: " +
            JSON.parse(localStorage.getItem(sortedKeys[i])).weight,
        });
      }
      return listArray;
    });
  };
  useEffect(() => {
    document.getElementById("clear").addEventListener("click", () => {
      window.localStorage.clear();
      setListItems([]);
    });
  }, [listItems]);

  const afterSubmission = (event) => {
    event.preventDefault();
    addToStorage();
  };
  return (
    <div style={{ width: 640 }}>
      <HomeButton />
      <h2>Weight Tracker</h2>
      <button onClick={getDate}>Show Key and Date</button>
      <form onSubmit={afterSubmission}>
        <button type="submit" id="add-to-storage">
          Submit Key and Date to localStorage
        </button>
        <br />
        <label htmlFor="weight">Input your weight </label>
        <input id="weight" required />
      </form>
      <h3 id="key"></h3>
      <h3 id="date"></h3>
      <h3>{newWeight}</h3>
      <button id="clear">Clear Storage</button>
    </div>
  );
};

export default WeightTracker;
