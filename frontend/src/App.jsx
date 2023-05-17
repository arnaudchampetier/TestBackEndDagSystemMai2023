import React, { useEffect, useState } from "react";
import EventList from "./components/EventList";
import CreateEvent from "./components/CreateEvent";
import FindActivityByName from "./components/FindActivityByName";
import Logo from "./assets/DAGLOGO.png";
import CreateActivityByEvent from "./components/CreateActivityByEvent";
import FilterEventByDate from "./components/FilterEventByDate";

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

  return (
    <div className="bg-gray-100 flex flex-col">
      <img
        src={Logo}
        alt="Logo"
        className="h-28 md:h-48 w-56 md:w-96 rounded-xl mx-auto"
      />
      <EventList events={events} onEventSelect={handleEventSelect} />
      <FindActivityByName />
      <div className="flex flex-row justify-center">
        <CreateEvent />
        {selectedEventId && <CreateActivityByEvent eventId={selectedEventId} />}
      </div>
      <FilterEventByDate />
    </div>
  );
}

export default App;
