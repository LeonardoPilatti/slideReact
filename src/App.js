import React from 'react';
import Slide from './Slide';

function App() {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1 aqui',
    },
    {
      id: 'slide2',
      text: 'Slide 2 aqui',
    },
    {
      id: 'slide3',
      text: 'Slide 3 aqui',
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
}

export default App;
