import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dark from "../assets/darkbg.jpg";
import PreviousButton from "../components/PreviousButton";

function CookList() {
  const [cooks, setCooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cook")
      .then((res) => res.json())
      .then((data) => setCooks(data));
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <PreviousButton />
      <div className="container mx-auto px-4 flex flex-col text-center mt-24">
        <h2 className="text-white text-3xl font-medium mb-4">
          Liste de nos cuisiniers
        </h2>
        <table className="w-full text-white table-auto">
          <thead>
            <tr>
              <th className="text-left p-3">Full Name</th>
              <th className="text-left p-3">Distinction</th>
              <th className="text-left p-3">Menu</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Quote</th>
              <th className="text-left p-3">Localisation</th>
              <th className="text-left p-3">Available</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cooks.map((cook) => (
              <tr key={cook.id}>
                <td className="p-3">{cook.fullName}</td>
                <td className="p-3">{cook.distinction}</td>
                <td className="p-3">{cook.menu}</td>
                <td className="p-3">{cook.price}</td>
                <td className="p-3">{cook.quote}</td>
                <td className="p-3">{cook.localisation}</td>
                <td className="p-3">{cook.isAvailable}</td>
                <td className="p-3">
                  <NavLink to={`/editcook/${cook.id}`}>
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    >
                      Modifier
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CookList;
