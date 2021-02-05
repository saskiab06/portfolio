import React from "react";
import { Link } from "react-router-dom";

const ArrowUp = () => {
  return (
    <div className="arrow__box">
      <Link to="/" className="arrow arrow--home">
        <svg
          width="169"
          height="33"
          viewBox="0 0 169 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#ddd" strokeLinecap="round" strokeWidth="3">
            <line x1="84.6" y1="3.6761" x2="2.10834" y2="33.02627" />
            <line x1="84.6" y1="3.6761" x2="167.053" y2="33.02627" />
            <path d="M84.59 10.3001L38.1237 27" />
            <path d="M84.59 10.3001L130.457 27" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default ArrowUp;
