import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateActivityByEvent({ eventId }) {
  const [nom, setNom] = useState("");
  const [dateDeCreation, setDateDeCreation] = useState("");
  const [dateDeDebut, setDateDeDebut] = useState("");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleDateDeCreationChange = (e) => {
    setDateDeCreation(e.target.value);
  };

  const handleDateDeDebutChange = (e) => {
    setDateDeDebut(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      nom,
      date_de_creation: dateDeCreation,
      date_de_debut: dateDeDebut,
      evenement: eventId,
    };

    // Envoyer la requête POST pour créer l'activité
    fetch(`http://localhost:5000/api/events/${eventId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => {
        if (response.status === 201) {
          // Activité créée avec succès
          console.warn("Activité créée !");
          // Réinitialiser les champs du formulaire
          setNom("");
          setDateDeCreation("");
          setDateDeDebut("");
        } else {
          // Erreur lors de la création de l'activité
          console.error("Erreur lors de la création de l'activité");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'activité", error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Créer une activité</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-gray-700">
            Nom de l'activité:
          </label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={handleNomChange}
            required
            className="border border-gray-400 px-4 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateDeCreation" className="block text-gray-700">
            Date de création:
          </label>
          <input
            type="date"
            id="dateDeCreation"
            value={dateDeCreation}
            onChange={handleDateDeCreationChange}
            required
            className="border border-gray-400 px-4 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateDeDebut" className="block text-gray-700">
            Date de début:
          </label>
          <input
            type="date"
            id="dateDeDebut"
            value={dateDeDebut}
            onChange={handleDateDeDebutChange}
            required
            className="border border-gray-400 px-4 py-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Créer
        </button>
      </form>
    </div>
  );
}

CreateActivityByEvent.propTypes = {
  eventId: PropTypes.number.isRequired,
};
export default CreateActivityByEvent;
