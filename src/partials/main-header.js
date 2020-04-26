import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import HomePage from '../pages/home-page.js';
import ProjectsPage from '../pages/projects-page.js';
import ServicesPage from '../pages/services-page.js';
import AboutPage from '../pages/about-page.js';

const MainHeader = () => {
  return (
    <Router>
      <div className='main-header'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/'>Get in touch</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='/services'>
          <ServicesPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainHeader;
