import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import Main from './components/streams/Main';
import Info from './components/streams/Info';
import Schedule from './components/streams/Schedule';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ScrollToTop/>
          <Header />
          <Route path='/' exact component={Main} />
          <Route path='/streams/info' exact component={Info} />
          <Route path='/streams/schedule' exact component={Schedule} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
