import React from "react";
import { useNavigate } from "react-router-dom";
import previousbtn from "../assets/previousbutton.png";

function PreviousButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="md:absolute md:left-10 md:w-fit md:p-3 absolute left-0 w-fit p-3"
    >
      <img src={previousbtn} className="w-12 h-12" alt="previous button" />
    </button>
  );
}

export default PreviousButton;
