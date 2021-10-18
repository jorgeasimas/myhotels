import "./edit.scss";
import axios from "axios";
import List from "material-ui/List/List";
import { useEffect, useState } from "react";

export default function AddItem() {
  const initialState = {
    title: "",
    price: "",
    location: "",
    bed: "",
    available: false,
  };
  const [hotel, SetHotel] = useState(initialState);

  function handleInput(e) {
    const { name, value } = e.target;
    SetHotel({ ...hotel, [name]: value });
  }
  function handleSubmit() {
    if (
      hotel.title !== "" &&
      hotel.price !== "" &&
      hotel.location !== "" &&
      hotel.bed !== ""
    ) {
      console.log(hotel);
      SetHotel(initialState);
    } else {
      return null;
    }
  }

  function handleClear() {
    SetHotel(initialState);
    console.log(hotel);
  }

  return (
    <div className="input-form">
      <div className="input-field">
        <label>Type</label>
        <input
          type="text"
          required
          value={hotel.title}
          onChange={handleInput}
          name="title"
        />
      </div>
      <div className="input-field">
        <label>Price</label>
        <input
          type="text"
          required
          value={hotel.price}
          onChange={handleInput}
          name="price"
        />
      </div>
      <div className="input-field">
        <label>Location</label>
        <input
          type="text"
          required
          value={hotel.location}
          onChange={handleInput}
          name="location"
        />
      </div>
      <div className="input-field">
        <label>Bed</label>
        <input
          type="text"
          required
          value={hotel.bed}
          onChange={handleInput}
          name="bed"
        />
      </div>
      <button className="save-inputs" onClick={handleSubmit}>
        Save
      </button>
      <button className="clear-inputs" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
