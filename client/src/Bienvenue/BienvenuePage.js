import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

import AvatarImg from '../../public/assets/sandro-avatar.png';

import './BienvenuePage.css';

class BienvenuePage extends Component {
    render() {
        return (
            <div>
                <Container id="BienvenueContainer">
                    <Row id="RowImage">
                        <Col>
                            <Image width="150px" height="150px" src={AvatarImg} roundedCircle/>
                        </Col>
                    </Row>
                    <Row id="RowText">
                        <Col>
                            <p id="Hello">Bonjour!</p><br/>
                            <p>
                                My name is Sandro TCHIKOVANI, a <span className="BoldText">French Entrepreneur</span> and <span className="BoldText">Software Engineer</span>. You can see the different projects I’ve worked on by clicking <Link className="BoldText" to="/projects">here</Link>.<br/><br/>
                                Passionate of technologies, I’ve always loved building things. As a child, I’ve started with LEGO constructions and today focused on Software constructions. Besides technology, I also like sports , traveling, food, movies, music, video games & more.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BienvenuePage;