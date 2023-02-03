import React, { useState } from "react";
import dark from "../assets/darkbg.jpg";
import PreviousButton from "../components/PreviousButton";

function AddCook() {
  const [fullName, setFullName] = useState("");
  const [distinction, setDistinction] = useState("");
  const [menu, setMenu] = useState("");
  const [price, setPrice] = useState("");
  const [quote, setQuote] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName,
      distinction,
      menu,
      price,
      quote,
      localisation,
      picture,
    };

    const response = await fetch("http://localhost:5000/api/cook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (
      !fullName ||
      !distinction ||
      !menu ||
      !price ||
      !quote ||
      !localisation
    ) {
      alert("Tous les champs sont obligatoires");
      e.preventDefault();
    } else if (response.ok) {
      alert("Cuisinier ajouté avec succès!");
    }
  };

  return (
    <div
      className=" flex flex-col  min-h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <h1 className="text-white text-center text-2xl md:text-4xl md:mb-12 mb-4 mt-16">
        Actions administratives{" "}
      </h1>
      <h2 className="text-white text-center text-2xl mb-4 mt-8">
        Ajouter un nouveau cuisinier :{" "}
      </h2>
      <form
        className="w-2/3 rounded-xl max-w-sm flex flex-col justify-center items-center mx-auto my-auto md:my-24 mb-8 bg-white py-8 px-8"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="fullName"
            >
              Nom complet
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="John Doe"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="fullName"
            >
              Photo de profil{" "}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="John Doe"
              id="fullName"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="fullName"
            >
              Localisation{" "}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="John Doe"
              id="fullName"
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="distinction"
            >
              Distinction
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Meilleur cuisinier du monde"
              id="distinction"
              value={distinction}
              onChange={(e) => setDistinction(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="menu"
            >
              Menu
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Sushi"
              id="menu"
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="price"
            >
              Prix
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="50$"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="quote"
            >
              Citation
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="La nourriture est l'art de la vie"
              id="quote"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gray-900 h-14 w-2/5 md:w-full  text-white text-center font-medium rounded-lg  px-1 py-1 hover:scale-105 duration-300 border-black opacity-50 hover:opacity-100 border-2"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddCook;
