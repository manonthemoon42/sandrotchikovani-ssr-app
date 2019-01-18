import React, { Component } from 'react';

import Project from './Project';

// Images
import SandroLogoImg from '../../public/assets/SandroLogoImg.svg';
import TrophizLogoImg from '../../public/assets/TrophizLogoText.svg';
import UdemyLogoImg from '../../public/assets/UdemyLogo.svg';
import TripAdvisorLogoImg from '../../public/assets/TripAdvisorLogo.svg';

// Models
import ProjectModel from "./ProjectModel";

// Styling
import './ProjectsPage.css';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);

        const sandro = new ProjectModel("SandroProject", SandroLogoImg, "https://www.sandrotchikovani.com");
        const trophiz = new ProjectModel("TrophizProject", TrophizLogoImg, "https://itunes.apple.com/us/app/trophiz-sports-athletes/id1275819465?mt=8");
        const udemy = new ProjectModel("UdemyProject", UdemyLogoImg, "https://itunes.apple.com/us/app/udemy-online-courses/id562413829?mt=8");
        const tripAdvisor = new ProjectModel("TripAdvisorProject", TripAdvisorLogoImg, "https://itunes.apple.com/us/app/tripadvisor-hotels-restaurants/id284876795?mt=8");

        this.state = {
            sandro: sandro,
            trophiz: trophiz,
            udemy: udemy,
            tripAdvisor: tripAdvisor
        };
    }

    render() {
        return (
            <div id="ProjectsContainer">
                <Project project={ this.state.sandro }/>
                <Project project={ this.state.trophiz }/>
                <Project project={ this.state.udemy }/>
                <Project project={ this.state.tripAdvisor }/>
            </div>
        );
    }
}

export default ProjectsPage;