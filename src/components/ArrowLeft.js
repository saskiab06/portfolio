import React from "react";
import { Link } from "react-router-dom";

const ArrowLeft = () => {
  return (
    <div className="arrow__box arrow__box--left">
      <Link to="/" className="arrow arrow--home">
        <svg
          width="43"
          height="169"
          viewBox="0 0 43 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#ddd" strokeLinecap="round" strokeWidth="3">
            <path d="M2.20022 84.6289L41.14 2.00922" />
            <path d="M2.11282 85.6759L41.1358 167.093" />
            <path d="M10.7 85.4372L32.4138 38.9709" />
            <path d="M10.705 85.44L33.2209 131.294" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default ArrowLeft;
