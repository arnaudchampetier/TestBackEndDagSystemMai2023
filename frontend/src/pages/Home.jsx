import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";

import dark from "../assets/darkbg.jpg";
import chef from "../assets/chefetoile.png";

import "../App.css";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick1 = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="min-h-screen h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${dark})` }}
      >
        <main className="container flex  flex-col items-center justify-center text-center text-white ">
          <h1 className="text-5xl font-bold md:text-8xl mb-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
            <br /> Quality Dining
            <p className="text-2xl md:text-5xl font-sans mb-8  mt-8 scale-90 transition  duration-1000 ease-in-out transform text-white hover:scale-105">
              Order. Relax. Enjoy.{" "}
            </p>
          </h1>
          <img
            src={chef}
            alt="chef"
            className="h-44 w-38 md:h-64 md:w-44   mb-8 animate-pulse "
          />
          <p className="text-xl font-light     md:text-2xl mb-4  mt-8 scale-90 transition duration-1000 ease-in-out transform text-white hover:scale-105">
            Invitez un chef de renom à venir cuisiner chez vous !{" "}
          </p>

          <div className="flex flex-col items-center justify-center">
            <NavLink to="login">
              <a href="https://drive.google.com/file/d/1Vx0O-ZAjfUOzW1jfQypXocMFD9yKQR4s/view?usp=sharing">
                <button
                  type="submit"
                  className="bg-white text-black mb-4 m-12 py-4 px-4 rounded-xl mt-4 text-xl w-44 md:w-44"
                >
                  Se connecter{" "}
                </button>
              </a>
            </NavLink>
          </div>
          <div>
            <button
              type="button"
              className="bg-white text-black mb-4 m-12 py-4 px-4 rounded-xl mt-4 text-xl w-44 md:w-44"
              onClick={handleClick1}
            >
              Nos offres{" "}
            </button>
            {showModal && (
              <div className="fixed top-0 left-0 h-full w-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white p-8 rounded">
                  <p className="text-black font-bold">
                    Désolé! Vous devez vous connecter pour accéder à cette page.
                    Authentifiez-vous ou créez un compte.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>

          <div />
          <p className="pb-2 pt-2 text-white  text-sm md:text-lg">
            Pas encore membre ? Cliquez{" "}
            <span type="button" className=" spanIci text-blue-600">
              <NavLink to="register">ici </NavLink>
            </span>{" "}
            pour vous inscrire
          </p>

          <div className="mt-4 w-full ">
            <NavBar />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
