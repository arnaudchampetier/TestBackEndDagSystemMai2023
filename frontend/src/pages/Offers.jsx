import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LogOut from "../components/Logout";
import PreviousButton from "../components/PreviousButton";
import dark from "../assets/darkbg.jpg";

function Offers() {
  const [cooks, setCooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cook")
      .then((res) => res.json())
      .then((data) => setCooks(data));
  }, []);

  return (
    <div
      className="flex flex-col items-center h-screen w-screen bg-gray-900 bg-cover bg-center overflow-auto"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <h1 className="text-5xl text-white font-bold md:text-8xl mb-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
        <br /> Quality Dining
        <p className="text-2xl md:text-3xl font-sans mb-8  mt-8 scale-90 transition  duration-1000 ease-in-out transform text-white hover:scale-105">
          Order. Relax. Enjoy.{" "}
        </p>
      </h1>
      <h2 className="text-white text-center text-2xl mb-4 mt-8">
        Vous pourrez bientôt réserver votre dîner directement en ligne...
        <h3>En attendant vous pouvez le faire par téléphone 😉</h3>
        <h4>Pour toute réservation : 04 72 72 72 72</h4>
      </h2>
      <p className="text-2xl text-white text-center md:text-3xl font-semibold mb-8  mt-8 ">
        Découvrez nos cuisiniers partenaires :{" "}
      </p>
      <div className=" flex flex-col items-center  ">
        {cooks.map((cook) => (
          <div
            key={cook.id}
            className="transition duration-500 ease-in-out transform hover:scale-105 w-3/4 h-3/4 md:w-1/2 md:h-1/2 py-8 px-8 flex flex-col items-center bg-white rounded-lg shadow-lg m-4 p-4 mb-12 md:mb-24"
          >
            <div className="flex flex-col items-center top-0">
              <h2 className="md:text-2xl text-xl font-medium mb-8 text-center">
                Notre chef d'exception : {cook.fullName}
              </h2>
              <img
                src={cook.picture}
                alt="avatar"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mb-8"
              />

              <p className=" font-semibold text-lg mb-4 text-gray-500">
                Distinction : {cook.distinctions}
              </p>
              <p className="text-semibold text-md font-light mb-2">
                Plat signature :{cook.menu}
              </p>
              <img
                src={cook.menupicture}
                alt="avatar"
                className="md:w-32 md:h-32 rounded-lg mb-4"
              />
              <p className="text-sm font-light mb-8">
                Tarif dîner 2 personnes :{cook.price}
              </p>
              <p className="text-sm font-semibold italic mb-4 ">{cook.quote}</p>
              <p className="text-sm font-light mb-4">
                Localisation :{cook.localisation}
              </p>
            </div>
          </div>
        ))}
        <LogOut />
      </div>

      <div className="mb-4 w-full h-full bottom-0 left-0 right-0">
        <Navbar />
      </div>
    </div>
  );
}

export default Offers;
