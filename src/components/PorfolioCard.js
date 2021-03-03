import React from "react";
import "../styles/portfolio.scss";

function truncate(input) {
  const words = 40;
  const splited = input.split(" ");
  if (splited.length > words) {
    var newInput;
    var index = 0;
    splited.forEach((word) => {
      if (index <= words) {
        if (newInput) {
          newInput = `${newInput} ${word}`;
        } else {
          newInput = word;
        }
        index++;
      }
    });
    return `${newInput}...`;
  }
  return input;
}

function PortfolioCard(props) {
  const item = props.item;
  const images = item.images ? item.images : [];
  const display = item.mobile
    ? "portfolio-display-mobile"
    : "portfolio-display-desktop";
  return (
    <span
      className="portfolio-card"
      onClick={() => {
        props.onItemSelected(item);
      }}
    >
      <h2>{item.title}</h2>
      <div className={`portfolio-content ${display}`}>
        {images.length > 0 && (
          <img src={images.length > 0 ? images[0] : ""} alt="profolio" />
        )}
        <div className="portfolio-info">
          <h1>“</h1>
          <p>{truncate(item.description)}</p>
        </div>
      </div>
    </span>
  );
}

export default PortfolioCard;
