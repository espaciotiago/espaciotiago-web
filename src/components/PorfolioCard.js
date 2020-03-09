import React from 'react'
import '../styles/portfolio.scss'

function PortfolioCard(props) {
    const item = props.item
    const images = item.images ? item.images : []
    const display = item.mobile ? "portfolio-display-mobile" : "portfolio-display-desktop"
    return (
        <span className="portfolio-card" onClick={() => { props.onItemSelected(item) }}>
            <h2>{item.title}</h2>
            <div className={`portfolio-content ${display}`}>
                {images.length > 0 &&
                    <img src={images.length > 0 ? images[0] : ""} alt="profolio" />}
                <div className="portfolio-info">
                    <h1>“</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        </span>
    )
}

export default PortfolioCard