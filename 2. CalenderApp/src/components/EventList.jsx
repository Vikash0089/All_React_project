import React from "react";
import EventCard from "./EventCard";

const EventList = ({
    selectedDate,
    events,
    Update_Event_Fun,
    Delete_Event_Fun,
}) => {
    return (
        <div className="event-list">
            <h2>My Created Event List</h2>
            <div className="event-cards">
                {events
                    .filter(
                        (event) =>
                            event.date.toDateString() ===
                            selectedDate.toDateString()
                    )
                    .map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            Update_Event_Fun={Update_Event_Fun}
                            Delete_Event_Fun={Delete_Event_Fun}
                        />
                    ))}
            </div>
        </div>
    );
};

export default EventList;
