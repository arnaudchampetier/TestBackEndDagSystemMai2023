import { useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import dark from "../assets/darkbg.jpg";
import CurrentUserContext from "../contexts/UserContext";
import PreviousButton from "../components/PreviousButton";

function EditCook() {
  const { id } = useParams();
  const [cooks, setCooks] = useState([]);
  const { token } = useContext(CurrentUserContext);
  const [formData, setFormData] = useState({
    fullName: "",
    distinction: "",
    menu: "",
    price: "",
    quote: "",
    localisation: "",
    isAvailable: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("coucou", { id });

    fetch(`http://localhost:5000/api/cook/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.warn(data);
        setCooks(data);
      });
  };

  return (
    <div
      className="flex flex-col min-h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />{" "}
      <h1 className="text-4xl text-white text-center flex flex-col items-center justify-center mt-48">
        {" "}
        EDIT COOK id number: {id}
      </h1>
      <form
        className="text-black flex flex-col duration-800 bg-gray-500 rounded-lg text-center mx-auto md:w-1/4 w-3-4 py-4 px-4 mt-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="fullName" className="text-lg text-black ">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={cooks.fullName}
          onChange={handleChange}
        />
        <label htmlFor="Distinctions" className="text-lg text-black ">
          Distinctions
        </label>
        <input
          type="text"
          id="Distinctions"
          name="Distinctions"
          value={cooks.distinctions}
          onChange={handleChange}
        />
        <label htmlFor="Menu" className="text-lg text-black ">
          Menu
        </label>
        <input
          type="text"
          id="Menu"
          name="Menu"
          value={cooks.menu}
          onChange={handleChange}
        />
        <label htmlFor="Price" className="text-lg text-black ">
          Price
        </label>
        <input
          type="text"
          id="Price"
          name="Price"
          value={cooks.price}
          onChange={handleChange}
        />
        <label htmlFor="Quote" className="text-lg text-black ">
          Quote
        </label>
        <input
          type="text"
          id="Quote"
          name="Quote"
          value={cooks.quote}
          onChange={handleChange}
        />
        <label htmlFor="Localisation" className="text-lg text-black ">
          Localisation
        </label>
        <input
          type="text"
          id="Localisation"
          name="Localisation"
          value={cooks.localisation}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4  rounded"
          onClick={handleSubmit}
        >
          Modifier
        </button>
      </form>
    </div>
  );
}
export default EditCook;
