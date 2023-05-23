import React, { useEffect, useState } from "react";
import "../App.css";

function EventList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.warn("données récupérees :", data);
        setActivities(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des activités", error);
      }
    };

    fetchActivities();
  }, []);

  // Fonction pour formater la date au format souhaité
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="mx-auto sm:max-w-screen-sm lg:max-w-screen-2xl  px-4 py-8 bg-red-100 mt-8 rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Liste des événements
      </h1>
      <div className="carousel overflow-x-auto">
        <div className="flex">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="card bg-red-200 flex-shrink-0 w-64 mx-2 shadow rounded-lg px-6 py-4 mb-4"
              >
                <h2 className="text-lg font-semibold">{activity.nom}</h2>
                <p className="text-gray-600">Lieu : {activity.lieu}</p>
                <p className="text-gray-600">
                  Date de début : {formatDate(activity.date_de_debut)}
                </p>
                <p className="text-gray-600">
                  Nombre de participants : {activity.nombre_de_participants}
                </p>
                <p className="text-gray-600">Activité : {activity.activite}</p>
              </div>
            ))
          ) : (
            <p>Aucun événement trouvé.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventList;
