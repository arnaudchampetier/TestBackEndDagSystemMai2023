import React, { useState } from "react";
import PropTypes from "prop-types";

function DeleteEvent({ events, onDelete }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDelete = () => {
    if (selectedEvent) {
      // eslint-disable-next-line no-alert
      const confirmDelete = window.confirm(
        "Êtes-vous sûr de vouloir supprimer cet événement ?"
      );
      if (confirmDelete) {
        fetch(`http://localhost:5000/api/events/${selectedEvent}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.status === 204) {
              console.warn("Événement supprimé !");
              onDelete(selectedEvent);
              // Rafraîchir la page
              window.location.reload();
            } else {
              console.error("Erreur lors de la suppression de l'événement");
            }
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la suppression de l'événement",
              error
            );
          });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-md mt-12 flex flex-col justify-between">
      <h5 className="text-2xl font-bold mb-4">Supprimer un événement</h5>
      <div className="mb-4">
        <label htmlFor="event" className="block text-gray-700">
          Sélectionner un événement :
        </label>
        <select
          id="event"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(parseInt(e.target.value, 10))}
          className="border border-gray-400 px-4 py-2 rounded w-full"
        >
          <option value="">Sélectionnez un événement</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.nom}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleDelete}
          disabled={!selectedEvent}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

DeleteEvent.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nom: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteEvent;
