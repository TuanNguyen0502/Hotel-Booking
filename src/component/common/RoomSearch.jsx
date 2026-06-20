import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../../service/ApiService";

const RoomSearch = ({ handleSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (err) {
        console.error("Error fetching room types:", err.message);
      }
    };
    fetchRoomTypes();
  }, []);

  const showError = (message, timeOut = 5000) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, timeOut);
  };

  const handleInternalSearch = async () => {
    if (!startDate || !endDate || !roomType) {
      showError("Please fill in all fields.");
      return;
    }

    try {
      const formattedStartDate = startDate
        ? startDate.toISOString().split("T")[0]
        : null;
      const formattedEndDate = endDate
        ? endDate.toISOString().split("T")[0]
        : null;
      const searchResults = await ApiService.getAvailableRoomsByDateAndType(
        formattedStartDate,
        formattedEndDate,
        roomType,
      );
      if (searchResults.getStatusCode === 200) {
        if (searchResults.rooms.length === 0) {
            showError("No rooms available for the selected criteria.");
            return;
        }
        handleSearch(searchResults.rooms);
        setError(""); // Clear any previous error messages
      }
    } catch (err) {
      console.error("Error during search:", err.message);
      showError("An error occurred during the search. Please try again.");
    }
  };

  return (
    <section>
      <div className="search-container">
        <div className="search-field">
          <label>Check-in Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-in Date"
          />
        </div>
        <div className="search-field">
          <label>Check-out Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-out Date"
          />
        </div>
        <div className="search-field">
          <label>Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option disabled value="">
              Select Room Type
            </option>
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button className="home-search-button" onClick={handleInternalSearch}>
          Search
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </section>
  );
};

export default RoomSearch;
