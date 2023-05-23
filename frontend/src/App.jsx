import React, { useEffect, useState } from "react";
import EventList from "./components/EventList";
import CreateEvent from "./components/CreateEvent";
import FindActivityByName from "./components/FindActivityByName";
import Logo from "./assets/DAGLOGO.png";
import CreateActivityByEvent from "./components/CreateActivityByEvent";
import FilterEventByDate from "./components/FilterEventByDate";
import DeleteEvent from "./components/DeleteEvent";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des événements", error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventSelect = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleEventDelete = (deletedEventId) => {
    setEvents(events.filter((event) => event.id !== deletedEventId));
    setSelectedEventId(null);
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mt-12 mb-12 uppercase">
        Test technique Back-End DAG
      </h1>
      <div className="text-center mb-12 italic w-full max-w-5xl mx-auto">
        <p>
          Sur cette page vous trouverez la liste des événements, une barre de
          recherche pour trouver les activités en tapant leur nom, un formulaire
          pour créer un événement ainsi qu'un formulaire pour créer une activité
          liée à un événement. Enfin, vous trouverez la liste des événements
          triés par date de début.
        </p>
        <p>
          J'ai utilisé Express et l'architecture MVC pour construire mon API.
          J'ai un database.sql pour créer la base de données, un router.js pour
          définir mes routes que j'ai toutes testées avec Postman.
        </p>
        <p>
          Ensuite j'ai créé deux models, un pour les événements et un pour les
          activités, ainsi que deux controllers, un pour les événements et un
          pour les activités.
        </p>
        <p>
          Enfin j'ai mis en place cette petite interface pour afficher les
          résultats de mes requêtes et pour pouvoir relier mon back avec mon
          front.
        </p>
        <p>
          J'aurais pu approfondir et faire beaucoup plus de choses et beaucoup
          mieux mais j'étais un peu pris par le temps donc je me suis concentré
          sur l'essentiel des consignes.
        </p>
        <p>
          Par exemple je n'ai pas ajouté de TypeScript car je n'ai pas encore
          codé d'applications en l'utilisant, même si je sais ce que c'est et
          que c'est très utile notamment pour des projets avec beaucoup de
          lignes de code. Merci !
        </p>
      </div>

      <img
        src={Logo}
        alt="Logo"
        className="h-28 md:h-48 w-56 md:w-96 rounded-xl mx-auto"
      />
      <EventList events={events} onEventSelect={handleEventSelect} />
      <FindActivityByName />
      <div className="flex justify-center space-x-24">
        <CreateEvent />
        {selectedEventId && <CreateActivityByEvent eventId={selectedEventId} />}
        {selectedEventId && (
          <DeleteEvent events={events} onDelete={handleEventDelete} />
        )}
      </div>
      <FilterEventByDate />
      <h2 className="text-2xl font-bold mb-12 text-center">
        Merci pour votre attention !
      </h2>
      <img
        src={Logo}
        alt="Logo"
        className="h-28 md:h-48 w-56 md:w-96 rounded-xl mx-auto mb-12"
      />
    </div>
  );
}

export default App;
