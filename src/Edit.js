import { Navbar } from "./Navbar";
import "./edit.scss";
import axios from "axios";
import List from "material-ui/List/List";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";

export default function Edit() {
  const [hotels, setHotels] = useState("");
  const [add, SetAdd] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/hotels").then((resp) => {
      setHotels(resp.data);
      // const list = resp.data;
    });
  }, []);

  return (
    <div className="edit-page">
      {/* <button onClick={Fetch}>Fetch</button> */}
      <Navbar />
      <div className="container-edit">
        <div className="table">
          <div className="label">
            <div>Type</div>
            <div>Price</div>
            <div>Location</div>
            <div>Beds</div>
            <div>Available</div>
            <div>Edit</div>
            <div>Remove</div>
          </div>
          {hotels
            ? hotels.map((item) => (
                <div className="col-6">
                  <div>{item.title}</div>
                  <div>$ {item.price}</div>
                  <div>{item.location}</div>
                  <div>{item.bed}</div>
                  <div>{item.available ? "YES" : "NO"}</div>
                  <button>edit</button>
                  <button>remove</button>
                </div>
              ))
            : null}
        </div>
        <div className="add-field">
          {add ? (
            <div>
              <AddItem />
              <button className="add-item" onClick={() => SetAdd(!add)}>
                Back
              </button>
            </div>
          ) : (
            <button className="add-item" onClick={() => SetAdd(!add)}>
              Add Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
