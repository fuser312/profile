import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import "../styling/contact.css"
import Profile from "../Images/profilepic.jpg";

function ContactMe(props) {
    return (
        <section>
        <div className="contact_main">
            <Grid className="contact_body">

                <Cell col={8}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contacts">


                            <div className="icons">
                            <i className="fa fa-phone"  aria-hidden="true" />
                                <p>+919801215835</p>
                            </div>

                            <div className="icons">
                            <a rel="noopener noreferrer" href="mailto:sahil.dogstar@gmail.com" target="_blank">
                            <i className="fa fa-google"  aria-hidden="true" />
                            </a>
                                <p className="special">sahils0891@gmail.com</p>
                            </div>

                        <div className="icons">

                            <a rel="noopener noreferrer" href="https://github.com/fuser312" target="_blank">
                                <i className="fa fa-github-square "  aria-hidden="true" />
                            </a>
                            <p>Github Profile</p>

                        </div>

                    </div>

                </Cell>

                <Cell col={4}>
                    <h2>Sahil Singh</h2>
                    <img src={Profile} className="main_image" alt="developer's photo"/>
                    <p className="intro">
                        Flutter and React Developer
                    </p>
                </Cell>
            </Grid>
        </div>
        </section>
    );
}

export default ContactMe;
