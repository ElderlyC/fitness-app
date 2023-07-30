import React from "react";

export default function FirebasePost() {
  const url = "https://fitness-app-b3040-default-rtdb.firebaseio.com/";

  const getUserWeights = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //get the data from firebase, then setUserWeights to it
      });
  };

  const saveWeights = (userWeights) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(userWeights),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data saved successfully:", data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return <div>FirebasePost</div>;
}
