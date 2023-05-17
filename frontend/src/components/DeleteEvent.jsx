import React, { useState } from "react";

function DeleteEvent(props) {
  const [error, setError] = useState(null);

  const handleDelete = () => {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    fetch(`/api/events/${props.eventId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // event successfully deleted
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          props.onDelete();
        } else {
          setError(
            "Une erreur est survenue lors de la suppression de l'événement."
          );
        }
      })
      .catch((er) => {
        console.error(er);
        setError(
          "Une erreur est survenue lors de la suppression de l'événement."
        );
      });
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleDelete}
      >
        Supprimer
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default DeleteEvent;
