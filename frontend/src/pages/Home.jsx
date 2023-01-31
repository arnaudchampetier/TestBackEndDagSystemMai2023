import React from "react";
import { NavLink } from "react-router-dom";

import miam from "../assets/gastronomie.jpg";

import "../App.css";

function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: `url(${miam})` }}
      >
        <main className="container flex  flex-start text-center text-white mr-8">
          <h1 className="text-5xl md:text-5xl mb-4 scale-90 transition duration-1000 ease-in-out transform hover:scale-105">
            <br /> Quality Dining
            <p className="text-3xl md:text-3xl mb-8  mt-8 scale-90 transition duration-1000 ease-in-out transform text-white hover:scale-105">
              Order. Relax. Enjoy.{" "}
            </p>
            <a href="https://drive.google.com/file/d/1Vx0O-ZAjfUOzW1jfQypXocMFD9yKQR4s/view?usp=sharing">
              <button
                type="submit"
                className="bg-white text-black mb-4 m-12 py-4 px-4 rounded-xl mt-4 text-xl"
              >
                Voir nos offres
              </button>
            </a>
          </h1>
        </main>
        <NavLink to="home">
          <button
            type="button"
            className="opacity-70 mb-2 bg-black hover:opacity-100 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
          >
            Accédez aux offres
          </button>
        </NavLink>

        <br />
        <NavLink to="login">
          <button
            type="button"
            className="opacity-70 hover:opacity-100 bg-red-700 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
          >
            SE CONNECTER
          </button>
        </NavLink>
        <p className="pb-2 pt-2">
          Pas encore de compte ? Cliquez{" "}
          <span type="button" className=" spanIci text-blue-600">
            <NavLink to="register">ici </NavLink>
          </span>{" "}
          pour vous inscrire
        </p>
      </div>
    </div>
  );
}

export default Home;
