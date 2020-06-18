import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import "../styling/contact.css"
import Profile from "../Images/profilepic.jpg";

function ContactMe(props) {
    return (
        <div className="contact_main">
            <Grid className="contact_body">
                <Cell col={6}>
                    <h2>Sahil Singh</h2>
                    <img src={Profile} className="main_image" alt="developer's photo"/>
                    <p className="intro">
                        Flutter and React Developer
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <List>
                        <ListItem>
                            <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="person">Aaron Paul</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                        </ListItem>
                    </List>

                </Cell>
            </Grid>
        </div>
    );
}

export default ContactMe;
