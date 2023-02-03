import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogOut from "../components/Logout";
import dark from "../assets/darkbg.jpg";

function DashboardAdmin() {
  const [adminUser, setAdminUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAdminUser() {
      const response = await fetch("http://localhost:5000/users/2");
      const data = await response.json();
      setAdminUser(data);
    }

    fetchAdminUser();
  }, []);

  return (
    <div
      className=" flex flex-col  min-h-screen w-screen bg-gray-900 bg-cover bg-center overflow-auto"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <div className=" my-8 text-white text-center text-3xl md:text-5xl">
        Tableau de bord Admin :{" "}
      </div>
      <h1 className="text-white text-center text-xl md:text-3xl mb-4">
        Mes informations personnelles
      </h1>
      {adminUser && (
        <div className="text-gray-500 bg-gray-50 mx-auto md:w-1/4 rounded-xl py-4 px-4 italic text-center text-lg">
          Nom complet : {adminUser.firstname} {adminUser.lastname}
          <br />
          Email : {adminUser.email}
          <br />
          Ville : {adminUser.city}
          <br />
          Téléphone : {adminUser.phone}
        </div>
      )}
      <h1 className="text-white text-center text-2xl mb-4 mt-24 md:text-4xl">
        Actions administratives{" "}
      </h1>
      <button
        type="button"
        className="text-black bg-white hover:scale-110  md:w-1/4 mx-auto  flex rounded-lg py-4 px-4 hover:bg-blue-700 text-center mt-4 text-xl mb-4 w-1/2"
        onClick={() => navigate("/addcook")}
      >
        Créer nouvelle fiche Cuisinier
      </button>
      <button
        type="button"
        className="text-black bg-white hover:scale-110  md:w-1/4 mx-auto flex rounded-lg py-4 px-4 hover:bg-blue-700 text-center mt-4 text-xl mb-4 w-1/2"
        onClick={() => navigate("/deletecook")}
      >
        Supprimer fiche Cuisinier
      </button>
      <button
        type="button"
        className="text-black bg-white hover:scale-110  md:w-1/4 mx-auto flex rounded-lg py-4 px-4 hover:bg-blue-700 text-center mt-4 text-xl mb-4 w-1/2"
        onClick={() => navigate("/cooklist")}
      >
        Modifier fiche Cuisinier
      </button>
      <NavLink to="/offers">
        <button
          type="button"
          className="bg-white hover:scale-110   flex mx-auto text-black mb-4 m-12 py-4 px-4  hover:bg-blue-700 rounded-xl mt-4 text-xl w-44 md:w-1/4"
        >
          Consulter nos offres{" "}
        </button>
      </NavLink>
      <div className="flex flex-col items-center mt-4">
        {" "}
        <LogOut />
      </div>
    </div>
  );
}

export default DashboardAdmin;
