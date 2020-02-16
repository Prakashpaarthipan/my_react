import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="homePage">
          <Cell col={12}>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="profile" className="avater-img" />
            <div className="banner-text"><h1>Full Stack Developer</h1>
              <hr />
              <p>HTML/CSS  |  Bootstrap  |  Javascript  |  React  |  Angular  |  Node JS  |  Mongo DB</p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;