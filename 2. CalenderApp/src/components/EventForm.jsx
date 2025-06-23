import React from "react";

const EventForm = ({
    selectedDate,
    eventName,
    setEventName,
    Create_Event_Fun,
}) => {
    return (
        <div className="event-form">
            <h2>Create Event</h2>
            <p>Selected Date: {selectedDate.toDateString()}</p>
            <input
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />
            <button className="create-btn" onClick={Create_Event_Fun}>
                Click Here to Add Event
            </button>
        </div>
    );
};

export default EventForm;
