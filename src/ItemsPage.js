import "./itemspage.scss";
import { Navbar } from "./Navbar";
import Items from "./Items";
import axios from "axios";
import List from "material-ui/List/List";
import { useEffect, useState } from "react";

const data = {
  AirBnb: [
    {
      bedroom: 2,
      type: "apartment",
      price: 75.0,
      location: "Los Angeles",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    },
    {
      bedroom: 1,
      type: "apartment",
      price: 65.0,
      location: "Los Angeles",
      available: 1,
      imageUrl:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg",
    },
    {
      bedroom: 1,
      type: "apartment",
      price: 45.0,
      location: "San Diego",
      available: 1,
      imageUrl:
        "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?cs=srgb&dl=pexels-pixabay-259962.jpg&fm=jpg",
    },
    {
      bedroom: 1,
      type: "apartment",
      price: 55.0,
      location: "Los Angeles",
      available: 0,
      imageUrl:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg",
    },
    {
      bedroom: 2,
      type: "town-home",
      price: 75.0,
      location: "San Francisco",
      available: 0,
      imageUrl:
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?cs=srgb&dl=pexels-chait-goli-1918291.jpg&fm=jpg",
    },
  ],
  HotelsOnline: [
    {
      bedroom: 3,
      type: "house",
      price: 75.0,
      location: "Los Angeles",
      available: 0,
      imageUrl:
        "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?cs=srgb&dl=pexels-vecislavas-popa-813692.jpg&fm=jpg",
    },
    {
      bedroom: 4,
      type: "house",
      price: 85.0,
      location: "Los Angeles",
      available: 1,
      imageUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-323780.jpg&fm=jpg",
    },
    {
      bedroom: 2,
      type: "apartment",
      price: 45.0,
      location: "Los Angeles",
      available: 0,
      imageUrl:
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1643384.jpg&fm=jpg",
    },
  ],
};
// export default function Itemspage() {
//   return (
//     <div className="items-page-container">
//       <Navbar />
//       {Object.keys(data).map((key) =>
//         data[key].map((item, idx) => <Items item={item} keys={key} />)
//       )}
//     </div>
//   );
// }

export default function Itemspage() {
  const [hotels, setHotels] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/hotels").then((resp) => {
      setHotels(resp.data);
      // const list = resp.data;
    });
  }, []);

  return (
    <div className="items-page-container">
      {/* <button onClick={Fetch}>Fetch</button> */}
      <Navbar />

      {hotels ? hotels.map((item) => <Items item={item} />) : null}
    </div>
  );
}
