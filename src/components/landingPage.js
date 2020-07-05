import React, {Component} from 'react';
import "../styling/landing.css"
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import Profile from "../Images/profilepic.jpg"
import firebase from "../Images/firebase.png"
import flutter from "../Images/flutter.png"
import mongodb from "../Images/mongodb.png"
import react from "../Images/react.png"
import upcover1 from "../Images/Upcover/upcover1.png"
import upcover2 from "../Images/Upcover/upcover2.png"
import upcover3 from "../Images/Upcover/upcover3.png"
import upcover4 from "../Images/Upcover/upcover4.png"
import upcover5 from "../Images/Upcover/upcover5.png"
import upcover6 from "../Images/Upcover/upcover6.png"
import upcover7 from "../Images/Upcover/upcover7.png"
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";

class LandingPage extends Component {
    render() {
        const images = [
            { url: upcover1 },
            { url: upcover2 },
            { url: upcover3 },
            { url: upcover4 },
            { url: upcover5 },
            { url: upcover6 },
            { url: upcover7 },
        ];

        var settings = {
            // dots: true,
            infinite: true,
            speed: 5,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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

                <div className="skills">
                    <h2>Skills</h2>
                    <hr/>
                    <Grid className="skills_body">


                        <Cell col={3}>
                            <img src = {flutter} className="skill_images" alt="flutter logo"/>
                            <p>
                                <ul>
                                    <li>Experience with entire flutter ecosystem</li>
                                    <li>Create beautiful and pixel perfect layouts</li>
                                    <li>Make http calls</li>
                                    <li>Create animations</li>
                                    <li>Connect to database</li>
                                </ul>
                            </p>
                        </Cell>
                        <Cell col={3}>
                            <img src = {firebase} className="skill_images" alt="firebase logo"/>
                            <p>
                                <ul>
                                    <li>Firebase Authentication</li>
                                    <li>Firebase Database</li>
                                    <li>Cloud functions </li>
                                    <li>Connect to database</li>
                                </ul>
                            </p>
                        </Cell>
                        <Cell col={3}>
                            <img src = {react} className="skill_images" alt="react logo"/>
                            <p>
                                <ul>
                                    <li>Pixel perfect layout</li>
                                    <li>Experience with Dynamic and mobile first web pages</li>
                                    <li>Make http calls</li>
                                    <li>Connect to database</li>
                                </ul>
                            </p>
                        </Cell>
                        <Cell col={3}>
                            <img src = {mongodb} className="skill_images" alt="mongodb logo"/>
                            <p>
                                <ul>
                                    <li>User Authentication</li>
                                    <li>Store and retrieve user data</li>
                                    <li>Cloud functions </li>
                                    <li>Connect to database</li>
                                </ul>
                            </p>
                        </Cell>
                    </Grid>
                </div>

                <div className="works">
                    <h2>
                        Recent Work
                    </h2>
                    <hr/>
                    <h3>Upcover Insurance Quotation App</h3>
                    <div className="about_app">
                        <Grid className="app_body">

                            <Cell col={6}>

                                <Slider {...settings}>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[0]})`}}>
                                            <img src={upcover1}/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[1]})`}}>
                                            <img src={upcover2}/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                                            <img src={upcover3}/>
                                        </div>
                                    </div>

                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                                            <img src={upcover4}/>
                                        </div>
                                    </div>

                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                                            <img src={upcover5}/>
                                        </div>
                                    </div>

                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                                            <img src={upcover6}/>
                                        </div>
                                    </div>

                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${images[2]})`}}>
                                            <img src={upcover7}/>
                                        </div>
                                    </div>


                                </Slider>

                            </Cell>

                            <Cell col={6}>
                                <div className="description">
                                <ul>
                                    <li>Upcover is an Australian startup which focuses on insurance for delivery riders for apps like Uber Eats, Doordash, GrubHub etc. Our team consisted of a senior technical lead, product manager and another junior developer.
                                    </li>
                                    <li>We created an insurance quote app from scratch including an intuitive chatbot interface for collecting user information.
                                    </li>
                                    <li>My focus was developing the chatbot which asked dynamic questions and generated a quote depending on the user’s answers.
                                    </li>
                                    <li>I implemented the calculation logic for calculating the quote.
                                    </li>
                                    <li>This app was also integrated with the firebase database that I helped create which allowed users to sign up and register.</li>
                                    <li>This app was also integrated with uber and doordash and users could integrate their accounts with these services.
                                    </li>

                                </ul>
                                </div>
                            </Cell>

                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
