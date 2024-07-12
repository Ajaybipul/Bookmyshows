import React, { useState, useEffect } from "react";
import "../styles/seatsSetup.css";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  const [inputValue, setInputValue] = useState("");

  // Update the input value whenever noOfSeat[text] changes
  useEffect(() => {
    setInputValue(noOfSeat?.[text] || "");
  }, [noOfSeat?.[text]]);

  // Handle input change
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(newValue) });
    window.localStorage.setItem(
      "seats",
      JSON.stringify({ ...noOfSeat, [e.target.name]: Number(newValue) })
    );
  };

  // Handle seat selection
  const handleSeatSelection = () => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={handleSeatSelection}
    >
      <span className="text">{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default SeatsInput;
