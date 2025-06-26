import React, { useState, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import'./App.css'
import Header from './components/Header';
// import Inputfile from './components/Inputfile';
import Button from './components/Button';
import Download from './components/Download';
import Resultimg from './components/Resultimg';
import Inputvideo from './components/Inputvideo';
import Footer from './components/Footer';

export default function App() {
  const [video, setVideo] = useState(null);
  const [gifUrl, setGifUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());

  const convertToGif = () => {
    if (!video || !(video instanceof File)) {
      alert('Please upload a valid video file.');
      return;
    }

    setIsLoading(true);
    const ffmpeg = ffmpegRef.current;

    const reader = new FileReader();
    reader.onload = async () => {
      const arrayBuffer = reader.result;
      const data = new Uint8Array(arrayBuffer);

      if (!ffmpeg.loaded) {
        await ffmpeg.load();
      }

      try {
        await ffmpeg.writeFile('input.mp4', data);

        await ffmpeg.exec([
          '-i',
          'input.mp4',
          '-t',
          '3',
          '-ss',
          '2.0',
          '-f',
          'gif',
          'output.gif',
        ]);

        const output = await ffmpeg.readFile('output.gif');
        const gifBlob = new Blob([output.buffer], { type: 'image/gif' });
        const gifURL = URL.createObjectURL(gifBlob);

        setGifUrl(gifURL);
      } catch (err) {
        console.error('FFmpeg conversion failed:', err);
        alert('Conversion failed. Check console for details.');
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      alert('Failed to read video file.');
      setIsLoading(false);
    };

    reader.readAsArrayBuffer(video);
  };

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Header />
        <Inputvideo onVideoSelect={setVideo} video={video} />
        <Button onClick={convertToGif} />
        {isLoading && <p>Converting...</p>}
        <Resultimg gifUrl={gifUrl} />
        <Download gifUrl={gifUrl} />
      </div>
      <Footer />
    </div>
  );  
}
