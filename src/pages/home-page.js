import React from 'react';
import Data from '../data/homepage-data.json';

const heroData = Data.Hero;
const projectsData = Data.Projects;
const servicesData = Data.Services;
const aboutData = Data.About;
const testimonialsData = Data.Testimonials;

const HomePage = () => {
  return (
    <div className="page-wrapper">
      {heroData.map(hero => (
        <section id="hero" key="heri">
          <h1>{hero.header}</h1>
          <p>{hero.content}</p>
          <a href="#">{hero.linkText}</a>
        </section>
      ))}
      {projectsData.map(projects => (
        <section id="projects" key="projects">
          <h1>{projects.header}</h1>
          <a href="#">{projects.linkText}</a>
        </section>
      ))}
      {servicesData.map(services => (
        <section id="services" key="services">
        <h1>{services.header}</h1>
          {services.listedServices.map(listedService => (
            <div key={listedService.id}>
              <h3>{listedService.serviceTitle}</h3>
              <p>{listedService.serviceDesc}</p>
              <hr/>
            </div>
          ))}
        </section>
      ))}
      {aboutData.map(about => (
        <section id="about" key="about">
          <h1>{about.header}</h1>
          <a href="#">{about.linkText}</a>
        </section>
      ))}
      {testimonialsData.map(testimonials => (
        <section id="testimonials" key="testimonials">
          <h1>{testimonials.header}</h1>
        </section>
      ))}
    </div>
  );
}

export default HomePage;
