import React, { useState } from "react";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: eventName,
          lieu: eventLocation,
          date_de_debut: eventDate,
        }),
      });

      if (response.ok) {
        // L'événement a été créé avec succès
        console.warn("Événement créé !");
        // Réinitialiser les valeurs des champs
        setEventName("");
        setEventLocation("");
        setEventDate("");
        // Rafraîchir la page
        window.location.reload();
      } else {
        console.error("Erreur lors de la création de l'événement");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'événement", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-4">Créer un événement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-gray-700">
            Nom de l'événement:
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            className="border border-gray-400 px-4 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventLocation" className="block text-gray-700">
            Lieu de l'événement:
          </label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
            className="border border-gray-400 px-4 py-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDate" className="block text-gray-700">
            Date de début:
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
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

export default CreateEvent;
