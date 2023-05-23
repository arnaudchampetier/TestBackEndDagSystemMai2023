import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CreateActivityByEvent({ eventId }) {
  const [nom, setNom] = useState("");
  const [dateDeCreation, setDateDeCreation] = useState("");
  const [dateDeDebut, setDateDeDebut] = useState("");
  const [evenements, setEvenements] = useState([]);
  const [selectedEvenement, setSelectedEvenement] = useState(null);

  useEffect(() => {
    // Récupérer la liste des événements disponibles
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvenements(data);
        setSelectedEvenement(eventId);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des événements", error);
      });
  }, [eventId]);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleDateDeCreationChange = (e) => {
    setDateDeCreation(e.target.value);
  };

  const handleDateDeDebutChange = (e) => {
    setDateDeDebut(e.target.value);
  };

  const handleEvenementChange = (e) => {
    setSelectedEvenement(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      nom,
      date_de_creation: dateDeCreation,
      date_de_debut: dateDeDebut,
      evenement: selectedEvenement,
    };

    // Envoyer la requête POST pour créer l'activité
    fetch(`http://localhost:5000/api/events/${selectedEvenement}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => {
        if (response.status === 201) {
          // Activité créée avec sucès
          console.warn("Activité créée !");
          setNom("");
          setDateDeCreation("");
          setDateDeDebut("");
          // Rafraîchir la page
          window.location.reload();
        } else {
          // Erreeur lors de la création de l'activité
          console.error("Erreur  création activité");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'activité", error);
      });
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-md mt-12">
      <h5 className="text-2xl font-bold mb-4">Ajouter une activité</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="evenement" className="block text-gray-700">
            Événement :
          </label>
          <select
            id="evenement"
            value={selectedEvenement}
            onChange={handleEvenementChange}
            className="border border-gray-400 px-4 py-2 rounded w-full"
          >
            {evenements.map((evenement) => (
              <option key={evenement.id} value={evenement.id}>
                {evenement.nom}
              </option>
            ))}
          </select>
        </div>
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
