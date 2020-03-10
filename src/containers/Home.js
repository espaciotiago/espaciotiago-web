import React from 'react';
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import PortfolioCard from '../components/PorfolioCard'

import { portfolioObjects, contentObject, moreObject } from '../utils/objects'

import Logo from '../assets/logo.png'
import '../styles/home.scss'

function Home(props) {

  const onItemSelected = (item) => {
    props.history.push(`${item.title}/${item.type}`)
  }

  const scroll = () => {
    window.scroll({ top: 500, left: 0, behavior: 'smooth' })
  }

  const goOnTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Presentation */}
      <section className="presentation">
        <div className="presentation-content">
          <h1>“</h1>
          <p>
            Hola, soy Tiago!
            <br />
            Soy ingeniero, geek, apasioando por la técnologia, el software y el café. Me dedico a desarrollar aplicaciones móviles y web para optimizar y automatizar procesos organizacionales.
            <br/>
            Poseo amplia experiencia trabajando en áreas de diseño e implementación de soluciones integrales de TI, desarrollo de aplicaciones móviles y gestión de proyectos de base tecnológica. Como desarrollador, tengo una amplia experiencia en el diseño y desarrollo de aplicaciones móviles (Native y Bridge para Android e iOS) y Web; así como programación en diferentes entornos de desarrollo y diseño de UI y UX.
          </p>
          <div className="actions">
            <span onClick={scroll}>Read more</span>
            <SocialLinks />
          </div>
        </div>
        <div>
        </div>
      </section>
      {/* Porfolio */}
      <Section title="Portfolio">
        <p>
          A continuación se muestran algunos de los proyectos más destacados que he tenido la oportunidad de desarrollar en mi carrera como independiente.
          Para obtener un poco más de información sobre mi background laborar, te invito a ver mi CV en el siguiente 
          <a href="http://espaciotiago.com/cv.pdf" target="_blank" rel="noopener noreferrer"> enlace</a>.
        </p>
        <div className="portfolio-container">
          {portfolioObjects.map((item, index) => {
            return (
              <PortfolioCard
                onItemSelected={onItemSelected}
                key={index + ""}
                item={item} />
            )
          })}
        </div>
      </Section>
      {/* Content */}
      <Section title="Content">
        <p>
          La generación de contenido es aún un mundo inexplorado por mi, pero que me genera mucha curiosidad.
          </p>
        <div className="portfolio-container">
          {contentObject.map((item, index) => {
            return (
              <PortfolioCard
                onItemSelected={onItemSelected}
                key={index + ""}
                item={item} />
            )
          })}
        </div>
      </Section>
      {/* About me */}
      <Section title="More">
        <p>
          Esta sección muestra otros de mis proyectos personales, pasiones y hobbies a los que dedico tiempo y esfuerzos,
          más alla de ámbito profesional. Son proyectos que me han permitido desarrollar habilidades y tener experiencias diferentes pero igual de enriquecedoras.
        </p>
        <div className="portfolio-container">
          {moreObject.map((item, index) => {
            return (
              <PortfolioCard
                onItemSelected={onItemSelected}
                key={index + ""}
                item={item} />
            )
          })}
        </div>
      </Section>
      {/* Footer */}
      <footer>
        <p>
          No dudes en ponerte en contacto si tienes una necesidad que consideras 
          puede ser resuelta médiante técnologia. Estoy siempre abierto al dialogo, un café y todo lo que involucre crear nuevas soluciones.
          </p>
        <div className="footer-end">
          <div className="actions">
            <SocialLinks />
          </div>
          <span onClick={goOnTop}><img src={Logo} alt="logo" className="img-logo" /></span>
        </div>
      </footer>
    </div>
  );
}

export default Home;