import React, { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";
import ThinEmoji from "../icons/greythin.png";
import HappyEmoji from "../icons/greysmiley.png";
import ChubbyEmoji from "../icons/greychubby.png";
import FatEmoji from "../icons/greyfat.png";
import GaugeChart from "react-gauge-chart";

const BMICalculator = () => {
  const [BMI, setBMI] = useState();
  const [emoji, setEmoji] = useState();
  const [emojiSize, setEmojiSize] = useState();
  const [emojiWidth, setEmojiWidth] = useState();
  const [emojiHeight, setEmojiHeight] = useState();
  const [gaugePercent, setPercent] = useState();

  const CalculateBMI = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    setBMI((weight / ((height * height) / 10000)).toFixed(1));
  };
  const afterSubmission = (event) => {
    event.preventDefault();
    setPercent((BMI - 13.5) / 21.5);
    console.log(gaugePercent);
  };
  useEffect(() => {
    if (BMI < 18.5) {
      setEmoji(ThinEmoji);
      setEmojiSize(105);
      setEmojiWidth(105);
      setEmojiHeight(130);
    } else if (BMI < 25) {
      setEmoji(HappyEmoji);
      setEmojiSize(135);
      setEmojiWidth(130);
      setEmojiHeight(130);
    } else if (BMI < 30) {
      setEmoji(ChubbyEmoji);
      setEmojiSize(130);
      setEmojiWidth(135);
      setEmojiHeight(130);
    } else {
      setEmoji(FatEmoji);
      setEmojiSize(165);
      setEmojiWidth(165);
      setEmojiHeight(130);
    }
  }, [BMI]);

  return (
    <div>
      <HomeButton />
      <h2>BMI Calculator</h2>
      <form onSubmit={afterSubmission}>
        <fieldset>
          <legend>Enter Your Weight</legend>
          <input id="weight" type="number" min="2" max="635" required />
          <span id="units">kg</span>
        </fieldset>
        <fieldset>
          <legend>Enter Your Height</legend>
          <input id="height" type="number" min="46" max="272" required />
          <span id="units">cm</span>
        </fieldset>
        <div>
          <button
            type="submit"
            onClick={CalculateBMI}
            style={{ fontSize: 12, width: 170, height: 30 }}
          >
            Calculate
          </button>
        </div>
      </form>
      {BMI &&
        document.getElementById("weight").value >= 2 &&
        document.getElementById("height").value >= 46 && (
          <h4 id="showBMI">{BMI}</h4>
        )}
      {document.getElementById("showBMI") && (
        <div
          style={{
            backgroundImage: `url(${emoji})`,
            backgroundSize: emojiSize,
            width: emojiWidth,
            height: emojiHeight,
            margin: "auto",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}

      {/* complex graph showing degrees (BMI meter with moving pointer) */}

      {document.getElementById("showBMI") && (
        <GaugeChart
          hideText="true"
          id="gauge-chart2"
          nrOfLevels={4}
          percent={gaugePercent}
        />
      )}
    </div>
  );
};

export default BMICalculator;
