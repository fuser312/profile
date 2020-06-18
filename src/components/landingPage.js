import React, {Component} from 'react';
import "../styling/landing.css"
import {Cell, Grid} from "react-mdl";
import Profile from "../Images/profilepic.jpg"

class LandingPage extends Component {
    render() {
        console.log(`profile path is : ${Profile}`);
        return (
            <div className="main">
                <Grid className="landing_grid">
                    <Cell col={12}>
                        <img src={Profile} className="main_image" alt="developer's photo"/>
                        <div className="banner_text">
                            <h1>Flutter and React JS Developer</h1>
                            <hr/>
                            <p>
                                Hello! I'm Sahil Singh, a Flutter and React developer located in India.  I have done numerous real world and chaleenging projects with Flutter and React.  Here are some of the apps I've developed over the past year.  I'm currently available for part-time or full-time work - feel free to drop me a message!
                            </p>
                            <div className="social_links">
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sahil-singh-4b4852139/" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                <a rel="noopener noreferrer" href="https://github.com/fuser312" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                                <a rel="noopener noreferrer" href="mailto:sahil.dogstar@gmail.com" target="_blank">
                                    <i className="fa fa-google"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
