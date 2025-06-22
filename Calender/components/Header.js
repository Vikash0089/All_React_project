import React from 'react';

const Header = ({ monthName, onPrev, onNext }) => (
    <header style={{
        padding: "20px",
        backgroundColor: "#0077cc",
        color: "#fff",
        textAlign: "center"
    }}>
        <h1>📅 {monthName}</h1>
        <div>
            <button onClick={onPrev}>&lt; Previous</button>
            <button onClick={onNext} style={{ marginLeft: 10 }}>Next &gt;</button>
        </div>
    </header>
);

export default Header;
