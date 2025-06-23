import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = ({ selectedDate, setSelectedDate, events }) => {
    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="calendar-container">
            <Calendar
                value={selectedDate}
                onClickDay={Date_Click_Fun}
                tileClassName={({ date }) =>
                    selectedDate &&
                        date.toDateString() === selectedDate.toDateString()
                        ? "selected"
                        : events.some(
                            (event) =>
                                event.date.toDateString() ===
                                date.toDateString()
                        )
                            ? "event-marked"
                            : ""
                }
            />
        </div>
    );
};

export default CalendarComponent;
