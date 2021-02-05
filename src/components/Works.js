import React from "react";
import danishBakery from "../assets/img/danish.png";
import homeplantery from "../assets/img/homeplantery.png";
import shelter from "../assets/img/shelter.png";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="works" id="works">
      <Link className="link--home" to="/">
        &#10092; Home
      </Link>
      <h2>Works</h2>
      <ul className="works__list">
        <li>
          <a href="https://saskiab06.github.io/danish-bakery">
            <img
              className="works__image"
              src={danishBakery}
              alt="The Danish Bakery"
            />
            <h3>The Danish Bakery</h3>
          </a>
        </li>
        <li>
          <a href="https://saskiab06.github.io/homeplantery-light">
            <img
              className="works__image"
              src={homeplantery}
              alt="Homeplantery - a homeplant company"
            />
            <h3>Homeplantery</h3>
          </a>
        </li>
        <li>
          <a href="https://saskiab06.github.io/animal_shelter">
            <img
              className="works__image"
              src={shelter}
              alt="Animals' shelter"
            />
            <h3>Animals Shelter</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Works;
