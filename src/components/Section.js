import React from 'react'
import VerticalText from './VerticalText'

function Section(props) {
    return (
        <section className="portfolio">
            <VerticalText label={props.title} />
            <div className="portfolio-content">
                {props.children}
                <hr />
            </div>
        </section>
    )
}

export default Section