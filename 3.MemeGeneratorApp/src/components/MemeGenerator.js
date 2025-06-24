// src/components/MemeGenerator.js
import React, { useState, useEffect } from 'react';
import './MemeGenerator.css';

const MemeGenerator = () => {
    const [memes, setMemes] = useState([]);
    const [randomMeme, setRandomMeme] = useState('');
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    // Fetch memes from API
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemes(data.data.memes));
    }, []);

    // Handle new meme button
    const generateMeme = () => {
        const randomIndex = Math.floor(Math.random() * memes.length);
        setRandomMeme(memes[randomIndex].url);
    };

    return (
        <div className="meme-container">
            <h1>Meme Generator</h1>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                />
                <button onClick={generateMeme}>Generate Meme</button>
            </div>

            {randomMeme && (
                <div className="meme">
                    <img src={randomMeme} alt="meme" />
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
            )}
        </div>
    );
};

export default MemeGenerator;
