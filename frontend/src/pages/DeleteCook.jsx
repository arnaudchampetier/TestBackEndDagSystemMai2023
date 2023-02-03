import React, { useState, useEffect, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import PreviousButton from "../components/PreviousButton";
import CurrentUserContext from "../contexts/UserContext";

import dark from "../assets/darkbg.jpg";

function DeleteCook() {
  const [cooks, setCooks] = useState([]);
  const { token } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [previCooks, setPreviCooks] = useState([]);

  const notifySuccess = () => {
    toast(`Cuisinier Supprimé avec succès !!`, {
      icon: "👋",
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/cook")
      .then((res) => res.json())
      .then((data) => setCooks(data));
  }, []);

  const handleDelete = (id, firstname) => {
    fetch(`http://localhost:5000/cook/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setCooks((prevCooks) => prevCooks.filter((cook) => cook.id !== id));
        navigate("/delete-cook");
        notifySuccess(firstname);
      });
  };
  useEffect(() => {
    const reloadPage = () => {
      fetch("http://localhost:5000/cook")
        .then((res) => res.json())
        .then((data) => {
          setCooks(data);
        });
    };

    reloadPage();
  }, [cooks]);

  useEffect(() => {
    if (cooks.length < previCooks.length) {
      notifySuccess(previCooks.find((cook) => !cooks.includes(cook)).fullName);
    }
    setPreviCooks(cooks);
  }, [cooks]);

  return (
    <div
      className="flex flex-col h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <Toaster position="top-center" reverseOrder />
      <h1 className="text-white text-center text-2xl md:text-4xl md:mb-12 mb-4 mt-16">
        Actions administratives{" "}
      </h1>
      <h2 className="text-white text-center text-2xl mb-4 mt-8">
        Supprimer un cuisinier :{" "}
      </h2>
      <div className="flex flex-col mt-8">
        {cooks.map((cook) => (
          <div
            key={cook.id}
            className="flex mx-auto w-3/4 justify-between p-4 mb-8 bg-gray-800 rounded"
          >
            <p className="text-white">{cook.fullName}</p>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(cook.id)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteCook;
