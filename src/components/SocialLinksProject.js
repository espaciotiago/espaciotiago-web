import React from 'react'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'

function SocialLinks(props) {
    const item = props.item ? props.item : {}
    const github = item.github
    const instagram = item.instagram
    const linkedin = item.linkedin
    const facebook = item.facebook
    const twitter = item.twitter
    const youtube = item.youtube

    return (
        <div className="social-links">
            {github && github !== "" && <a
                rel="noopener noreferrer"
                href="https://github.com/espaciotiago"
                target="_blank">
                <img src={Github} height={32} alt="github" />
            </a>}

            {linkedin && linkedin !== "" && <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/espaciotiago/"
                target="_blank">
                <img src={Linkedin} height={32} alt="linkedin" />
            </a>}

            {twitter && twitter !== "" && <a
                rel="noopener noreferrer"
                href="https://twitter.com/espaciotiago"
                target="_blank">
                <img src={Twitter} height={32} alt="twitter" />
            </a>}

            {facebook && facebook !== "" && <a
                rel="noopener noreferrer"
                href="https://twitter.com/espaciotiago"
                target="_blank">
                <img src={Facebook} height={32} alt="twitter" />
            </a>}

            {instagram && instagram !== "" && <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/espaciotiago/"
                target="_blank">
                <img src={Instagram} height={32} alt="instagram" />
            </a>}

            {youtube && youtube !== "" && <a
                rel="noopener noreferrer"
                href="https://github.com/espaciotiago"
                target="_blank">
                <img src={Youtube} height={32} alt="youtube" />
            </a>}
        </div>
    )
}

export default SocialLinks