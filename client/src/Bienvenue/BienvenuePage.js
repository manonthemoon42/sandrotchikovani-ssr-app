import React, { Component } from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

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
                                My name is Sandro TCHIKOVANI, a <span className="StrongWord">French Entrepreneur</span> and <span className="StrongWord">Software Engineer</span>. You can see the different projects I’ve worked on by clicking <span className="StrongWord">here</span>.<br/><br/>
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