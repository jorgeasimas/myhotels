import "./styles.scss";
import { Navbar } from "./Navbar";
import hotel from "./hotel.png";
import Book from "./Book";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="text1">
        <img alt="hotel" src={hotel}></img>
        <div className="text-block">Great momments await</div>
      </div>
      <Book />
    </div>
  );
}
