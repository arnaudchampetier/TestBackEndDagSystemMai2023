import React from "react";
import dark from "../assets/darkbg.jpg";
import PreviousButton from "../components/PreviousButton";

function UpdateCook() {
  return (
    <div
      className=" flex flex-col  min-h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <h1 className="text-white text-center text-2xl md:text-4xl md:mb-12 mb-4 mt-16">
        Bientôt sur Quality Dining ...{" "}
      </h1>
      <h2 className="text-white text-center text-2xl mb-4 mt-8">
        Vous pourrez bientôt réserver votre dîner directement en ligne...
        <h3>En attendant vous pouvez le faire par téléphone 😉</h3>
      </h2>
    </div>
  );
}

export default UpdateCook;
