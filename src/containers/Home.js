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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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