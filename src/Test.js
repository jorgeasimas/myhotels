import axios from "axios";
import React from "react";

export default function ShowHotels() {
  axios.get("http://localhost:8080/api/hotels").then((resp) => {
    const list = resp;
    console.log(list);
  });

  return <div></div>;
}
