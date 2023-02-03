import React, { useState, useEffect, useContext } from "react";
import PreviousButton from "../components/PreviousButton";
import dark from "../assets/darkbg.jpg";
import CurrentUserContext from "../contexts/UserContext";

function UpdateCook() {
  const [cooks, setCooks] = useState([]);
  const { token } = useContext(CurrentUserContext);

  const [selectedCook] = useState({});
  const [formData, setFormData] = useState({
    id: "",

    fullName: "",
    distinction: "",
    menu: "",
    price: "",
    quote: "",
    localisation: "",
    isAvailable: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/cook")
      .then((res) => res.json())
      .then((data) => setCooks(data));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id } = selectedCook;
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
        setCooks(
          cooks.map((cook) => {
            if (cook.id === id) {
              return data;
            }
            return cook;
          })
        );
      });
  };

  /* const handleUpdate = () => {
    setSelectedCook({
      id: selectedCook.id,
      fullName: formData.fullName,
      distinction: formData.distinction,
    });
  }; */

  return (
    <div
      className="flex flex-col min-h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <h1 className="text-white text-center text-2xl md:text-4xl md:mb-12 mb-4 mt-16">
        Actions administratives
      </h1>
      <h2 className="text-white text-center text-2xl mb-4 mt-8">
        Modifier un cuisinier :
      </h2>
      <form
        className="text-black flex flex-col duration-800 bg-gray-500 rounded-lg text-center mx-auto md:w-1/4 w-3-4 py-4 px-4 mt-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="id" className="text-lg">
          ID
        </label>
        <input
          type="text"
          id="ID"
          name="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <label htmlFor="fullName" className="text-lg">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label htmlFor="Distinctions" className="text-lg">
          Distinctions
        </label>
        <input
          type="text"
          id="Distinctions"
          name="Distinctions"
          value={formData.distinctions}
          onChange={handleChange}
        />
        <label htmlFor="Menu" className="text-lg">
          Menu
        </label>
        <input
          type="text"
          id="Menu"
          name="Menu"
          value={formData.menu}
          onChange={handleChange}
        />
        <label htmlFor="Price" className="text-lg">
          Price
        </label>
        <input
          type="text"
          id="Price"
          name="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="Quote" className="text-lg">
          Quote
        </label>
        <input
          type="text"
          id="Quote"
          name="Quote"
          value={formData.quote}
          onChange={handleChange}
        />
        <label htmlFor="Localisation" className="text-lg">
          Localisation
        </label>
        <input
          type="text"
          id="Localisation"
          name="Localisation"
          value={formData.localisation}
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
export default UpdateCook;
