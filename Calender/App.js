import React, { useState } from 'react';
import Header from './components/Header';
import CalendarBody from './components/CalendarBody';
import Footer from './components/Footer';

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const App = () => {
    const [date, setDate] = useState(new Date());
    const year = date.getFullYear();
    const month = date.getMonth();

    const handlePrev = () =>
        setDate(new Date(year, month - 1, 1));

    const handleNext = () =>
        setDate(new Date(year, month + 1, 1));

    return (
        <div>
            <Header
                monthName={`${MONTHS[month]} ${year}`}
                onPrev={handlePrev}
                onNext={handleNext}
            />
            <CalendarBody year={year} month={month} />
            <Footer />
        </div>
    );
};

export default App;
