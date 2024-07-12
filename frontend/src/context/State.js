import React, { useState, useEffect } from "react";
import BsContext from "./Context";

const BsState = (props) => {
  // State variables
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  // Base URL for API requests
  const API_BASE_URL = "https://bookmyshows-2.onrender.com" || "https://bookmyshows-2.onrender.com";

  // Function to make a post request to the server with the booking details
  const handlePostBooking = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie, slot: time, seats: noOfSeat }),
      });

      const data = await response.json();

      // Show error popup if the response status is not 200
      if (response.status !== 200) {
        setErrorPopup(true);
        setErrorMessage(data.message);
      } else {
        // Clear form and local storage if the response status is 200
        changeTime("");
        changeMovie("");
        changeNoOfSeats({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          D1: "",
          D2: "",
        });
        setLastBookingDetails(data.data);
        window.localStorage.clear();
      }
    } catch (error) {
      setErrorPopup(true);
      setErrorMessage("Failed to book the movie. Please try again later.");
      console.error("Error while posting booking:", error);
    }
  };

  // Function to get the last booking details from the server
  const handleGetLastBooking = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/booking`, {
        method: "GET",
      });

      const data = await response.json();
      // Set last booking details received from the backend
      setLastBookingDetails(data.data);
    } catch (error) {
      console.error("Error while getting last booking:", error);
    }
  };

  // Get movie slot and seats from localStorage and update state (useful when page refreshes)
  useEffect(() => {
    const storedMovie = window.localStorage.getItem("movie");
    const storedSlot = window.localStorage.getItem("slot");
    const storedSeats = JSON.parse(window.localStorage.getItem("seats"));

    if (storedMovie || storedSlot || storedSeats) {
      changeTime(storedSlot || "");
      changeMovie(storedMovie || "");
      changeNoOfSeats(storedSeats || {
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
    }
  }, []);

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
