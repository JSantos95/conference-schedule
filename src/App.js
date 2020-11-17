import React from 'react';
import './styles.css';
import Header from './components/Header';
import Event from './components/Event';
import Speaker from './components/Speaker';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Event />
      <Speaker />
      <Footer />
    </div>
  )
}

export default App;
