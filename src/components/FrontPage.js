import React from "react";
import ghLogo from "../assets/logo/github-logo.png";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <section className="main">
      <div className="main__personal-info">
        <div className="main__introduction">
          <p>
            <strong>Saskia</strong>, 24, Estonia
          </p>
          <p>Front-end developer and UX</p>
        </div>
        <hr />

        <div className="main__contacts">
          <div>
            <p className="main__at-sign">
              <strong>&#64;</strong>
            </p>
            <p className="main__mail">saskia.baltin [at] protonmail.com</p>
          </div>
          <div>
            <img
              className="main__github-logo"
              alt="github logo"
              src={ghLogo}
            ></img>
            <p>
              <a href="https://github.com/saskiab06">saskiab06</a>
            </p>
          </div>
        </div>
      </div>
      <h1>
        <span>
          Por<span id="t">t</span>
        </span>
        <span>folio</span>
      </h1>
      <div className="arrow__box arrow__box--down">
        <Link to="/works" className="arrow arrow--down">
          <svg
            width="169"
            height="33"
            viewBox="0 0 169 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#ddd" strokeLinecap="round" strokeWidth="3">
              <line x1="84.6" y1="30.6761" x2="2.10834" y2="3.02627" />
              <line x1="84.6" y1="30.6761" x2="167.053" y2="3.02627" />
              <path d="M84.59 23.3001L38.1237 7.9395" />
              <path d="M84.59 23.3001L130.457 7.9395" />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FrontPage;
