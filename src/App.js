import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <ScrollToTopButton />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
