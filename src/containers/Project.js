import React from 'react'
import SocialLinksProject from '../components/SocialLinksProject'
import { portfolioObjects, contentObject, moreObject } from '../utils/objects'
import Back from '../assets/back.png'
import '../styles/project.scss'

class Project extends React.Component {

    state = { title: "" }

    goBack = () => {
        this.props.history.push("../")
    }

    searchItem = (name, type) => {
        var itemSearched = false
        switch (type) {
            case "content":
                itemSearched = contentObject.find(element => element.title === name)
                break
            case "more":
                itemSearched = moreObject.find(element => element.title === name)
                break
            case "project":
                itemSearched = portfolioObjects.find(element => element.title === name)
                break
        }
        return itemSearched
    }

    componentDidMount() {
        const projectName = this.props.match.params.projectName
        const projectType = this.props.match.params.type
        const item = this.searchItem(projectName, projectType)
        if (item) {
            this.setState({
                item: item,
                title: projectName
            })
            //Validate images
            if (item.images && item.images.length > 0) {
                if (item.images.length > 1) {
                    this.setState({
                        image: item.images[1]
                    })
                } else {
                    this.setState({
                        image: item.images[0]
                    })
                }
            }
        } else {
            // Show error on screen
        }
    }

    render() {
        return (
            <div className="main-project">
                <div className="header">
                    <span onClick={this.goBack}><img src={Back} alt="Go back" className="back" /></span>
                    <h2>{this.state.title}</h2>
                </div>
                {this.state.item && <div className="project-content">
                    {this.state.image && <img src={this.state.image} alt="project" className="main-img" />}
                    <h1>“</h1>
                    <p>{this.state.item.description}</p>
                    <br />
                    <div className="portfolio-details">
                        {this.state.item.client && this.state.item.client !== "" &&
                            <p><b>Cliente: </b>{this.state.item.client}</p>}
                        {this.state.item.platforms && this.state.item.platforms !== "" &&
                            <p><b>Plataformas: </b>{this.state.item.platforms}</p>}
                        {this.state.item.technologies && this.state.item.technologies !== "" &&
                            <p><b>Técnologias: </b>{this.state.item.technologies}</p>}
                    </div>
                    <br />
                    <div className="actions">
                        {this.state.item.url && this.state.item.url !== "" &&
                            <a href={this.state.item.url} target="_blank" rel="noopener noreferrer">Visit</a>}
                        <SocialLinksProject item={this.state.item} />
                    </div>
                </div>}
            </div>
        )
    }
}

export default Project