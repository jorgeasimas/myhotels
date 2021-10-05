import React from "react";
import "./items.scss";

export default function Items({ item, keys }) {
  function handleClick() {
    item.available
      ? window.alert(
          `The ${item.title} at ${item.location} was booked with success`
        )
      : window.alert(
          `Sorry this ${item.title} is not available at this momment`
        );
  }
  return (
    <body>
      <div class="container">
        <article>
          <div class="container-flex">
            {item.available === true ? (
              <p class="sale">available</p>
            ) : (
              <p class="sale not">not available</p>
            )}
            <div class="box-img">
              <img
                src={item.imageUrl}
                alt="apartment"
                width="300"
                height="200"
              />
            </div>
            <div class="middle">
              <div class="cost-shipping">
                <p class="cost">
                  <strong>$ {item.price} per day</strong>
                </p>
              </div>
              <div class="product-details">{keys}</div>
              <ul class="product-list">
                <li>{item.bedroom} bed</li>
                <li>{item.title}</li>
                <li>
                  <strong>{item.location}</strong>
                </li>
              </ul>
            </div>
          </div>
          <button class="add" onClick={handleClick}>
            BOOK NOW
          </button>
        </article>
      </div>
    </body>
  );
}
