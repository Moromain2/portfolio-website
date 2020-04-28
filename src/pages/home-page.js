import React from 'react';
import Data from '../data/homepage-data.json';

const HomePage = () => {
  return (
    <div className="page-wrapper">
    {Data.map((data) => {
      return (
        <>
        <section id="hero" key={data.key} >
          <h1>{data.heroHeader}</h1>
          <p>{data.heroContent}</p>
          <a href="#">{data.heroLinkText}</a>
        </section>
        <section id="projects" key={data.key} >
          <h1>{data.projectsHeader}</h1>
          <a href="#">{data.projectsLinkText}</a>
        </section>
        <section id="services" key={data.key} >
          <h1>{data.servicesHeader}</h1>
          <a href="#">{data.servicestLinkText}</a>
        </section>
        <section id="about" key={data.key} >
          <h1>{data.aboutHeader}</h1>
          <a href="#">{data.aboutLinkText}</a>
        </section>
        <section id="about" key={data.key} >
          <h1>{data.testimonialsHeader}</h1>
        </section>
        </>
      )
    })}
    </div>
  );
}

export default HomePage;
