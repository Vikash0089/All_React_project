import React from "react";

const EventCard = ({ event, Update_Event_Fun, Delete_Event_Fun }) => {
    return (
        <div className="event-card">
            <div className="event-card-header">
                <span className="event-date">
                    {event.date.toDateString()}
                </span>
                <div className="event-actions">
                    <button
                        className="update-btn"
                        onClick={() => {
                            const newTitle = prompt("ENTER NEW TITLE");
                            if (newTitle) Update_Event_Fun(event.id, newTitle);
                        }}
                    >
                        Update Event
                    </button>
                    <button
                        className="delete-btn"
                        onClick={() => Delete_Event_Fun(event.id)}
                    >
                        Delete Event
                    </button>
                </div>
            </div>
            <div className="event-card-body">
                <p className="event-title">{event.title}</p>
            </div>
        </div>
    );
};

export default EventCard;
