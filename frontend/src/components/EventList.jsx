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

  return (
    <div className="mx-48 px-4 py-8 bg-red-100 mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Liste des événements
      </h1>
      <div className="carousel">
        {activities.length > 0 ? (
          <div className="flex overflow-x-auto">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="card bg-red-200 mx-2 shadow rounded-lg px-6 py-4 mb-4"
              >
                <h2 className="text-l font-semibold">{activity.nom}</h2>
                <p className="text-gray-600">Lieu : {activity.lieu}</p>
                <p className="text-gray-600">
                  Date de début : {activity.date_de_debut}
                </p>
                <p className="text-gray-600">
                  Nombre de participants : {activity.nombre_de_participants}
                </p>
                <p className="text-gray-600">Activité : {activity.activite}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun événement trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default EventList;
