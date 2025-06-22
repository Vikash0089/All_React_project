import React from 'react';

const CalendarBody = ({ year, month }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const blanks = Array.from({ length: firstDay });
    const monthDays = Array.from({ length: totalDays }, (_, i) => i + 1);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "5px",
                fontWeight: "bold"
            }}>
                {days.map(d => (
                    <div key={d} style={{ padding: "10px", backgroundColor: "#e0e0e0" }}>{d}</div>
                ))}
                {blanks.map((_, i) => (
                    <div key={'b' + i} style={{ padding: "15px" }}></div>
                ))}
                {monthDays.map(day => (
                    <div key={day} style={{
                        padding: "15px",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc"
                    }}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarBody;
