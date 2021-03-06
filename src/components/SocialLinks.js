import React from 'react'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'
import Pdf from '../assets/pdf.png'

function SocialLinks() {
    return (
        <div className="social-links">
            <a
                rel="noopener noreferrer"
                href="https://github.com/espaciotiago"
                target="_blank">
                <img src={Github} height={32} alt="github" />
            </a>

            <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/espaciotiago/"
                target="_blank">
                <img src={Linkedin} height={32} alt="linkedin" />
            </a>

            <a
                rel="noopener noreferrer"
                href="https://twitter.com/espaciotiago"
                target="_blank">
                <img src={Twitter} height={32} alt="twitter" />
            </a>

            <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/espaciotiago/"
                target="_blank">
                <img src={Instagram} height={32} alt="instagram" />
            </a>

            <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCXkkm-gmg4jJ-uBJdt7t7hA"
                target="_blank">
                <img src={Youtube} height={32} alt="youtube" />
            </a>
            <a
                rel="noopener noreferrer"
                href="http://espaciotiago.com/cv.pdf"
                target="_blank">
                <img src={Pdf} height={32} alt="pdf" />
            </a>
        </div>
    )
}

export default SocialLinks