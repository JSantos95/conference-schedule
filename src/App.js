import React from 'react';
import './styles.css';
import Header from './components/Header';
import Event from './components/Event';
import Speaker from './components/Speaker';

const App = () => {
  return (
    <div>
      <Header />
      <Event />
      <Speaker />
    </div>
  )
}

export default App;
