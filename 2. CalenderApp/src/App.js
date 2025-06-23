import React, { useState } from "react";
import CalendarComponent from "./components/CalendarComponent";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);

  const Create_Event_Fun = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
      };
      setEvents([...events, newEvent]);
      setSelectedDate(newEvent.date);
      setEventName("");
    }
  };

  const Update_Event_Fun = (eventId, newName) => {
    const updated_Events = events.map((event) =>
      event.id === eventId ? { ...event, title: newName } : event
    );
    setEvents(updated_Events);
  };

  const Delete_Event_Fun = (eventId) => {
    const updated_Events = events.filter((event) => event.id !== eventId);
    setEvents(updated_Events);
  };

  return (
    <div className="app">
      <h1>Calendar Application</h1>
      <div className="container">
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          events={events}
        />
        <div className="event-container">
          {selectedDate && (
            <EventForm
              selectedDate={selectedDate}
              eventName={eventName}
              setEventName={setEventName}
              Create_Event_Fun={Create_Event_Fun}
            />
          )}
          {events.length > 0 && selectedDate && (
            <EventList
              selectedDate={selectedDate}
              events={events}
              Update_Event_Fun={Update_Event_Fun}
              Delete_Event_Fun={Delete_Event_Fun}
            />
          )}
        </div>
      </div>
      < Footer />
    </div>
  );
};

export default App;
