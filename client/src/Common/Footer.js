import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
          <footer className="Footer">
              <div id="InviteToConnect">
                  <span>Want to connect?<br/>Feel free to reach out, I’d be happy to chat!</span>
              </div>
              <div id="SocialIcons">
                  <SocialIcon url="mailto:tchikovani.s@gmail.com" network="email" bgColor="#000428" fgColor="white"
                              style={{ height: 35, width: 35 }}  className="SocialIcon" target="_blank" rel="noopener noreferrer"/>
                  <SocialIcon url="https://www.linkedin.com/in/sandro-t" bgColor="#000428" fgColor="white"
                              style={{ height: 35, width: 35 }} className="SocialIcon" target="_blank" rel="noopener noreferrer"/>
                  <SocialIcon url="https://twitter.com/ManOnTheMoon42" bgColor="#000428" fgColor="white"
                              style={{ height: 35, width: 35 }} className="SocialIcon" target="_blank" rel="noopener noreferrer"/>
                  <SocialIcon url="https://www.instagram.com/manonthemoon42" bgColor="#000428" fgColor="white"
                              style={{ height: 35, width: 35 }} className="SocialIcon" target="_blank" rel="noopener noreferrer"/>
                  <SocialIcon url="https://www.facebook.com/sandro.tchikovani" bgColor="#000428" fgColor="white" className="SocialIcon"
                              style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer"/>
                  <SocialIcon url="https://github.com/manonthemoon42" bgColor="#000428" fgColor="white" className="SocialIcon"
                              style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer"/>
              </div>
          </footer>
        );
    }
}

export default Footer;
