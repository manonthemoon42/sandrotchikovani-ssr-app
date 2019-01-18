import React from 'react';

import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './Project.css';

class Project extends React.Component {
    render() {
        return (
            <div className="Project" id={this.props.project.domID}>
                <Container>
                    <Row className="Row align-items-center">
                        <Col>
                            <Image className="ProjectLogo" src={ this.props.project.logoImage } fluid />
                        </Col>
                        <Col sm={3}>
                            <a href={ this.props.project.link } target="_blank" rel="noopener noreferrer">
                                <Button bsPrefix="ProjectLearnMoreBtn">Learn More</Button>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Project;