import React, { useEffect, useState } from "react";

function FilterEventByDate() {
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const fetchSortedEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events/sorted");
        const data = await response.json();
        setSortedEvents(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des événements triés par date",
          error
        );
      }
    };

    fetchSortedEvents();
  }, []);

  // Fonction pour formater la date au format souhaité
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col mt-12 mb-48">
      <h2 className="text-2xl font-bold mb-12 text-center">
        Événements triés par date de début :
      </h2>
      {sortedEvents.length > 0 ? (
        <div className="flex flex-col mx-8">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md p-4 rounded-lg mb-4 flex flex-col w-full"
            >
              <h3 className="text-lg font-bold mb-2">{event.nom}</h3>
              <p className="text-gray-600 mb-2">Lieu : {event.lieu}</p>
              <p className="text-gray-600 mb-2">
                Date de début : {formatDate(event.date_de_debut)}
              </p>
              <p className="text-gray-600">
                Nombre de participants : {event.nombre_de_participants}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun événement trouvé.</p>
      )}
    </div>
  );
}

export default FilterEventByDate;
