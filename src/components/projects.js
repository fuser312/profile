import React, {Component, useState} from 'react';
import "../styling/projects.css"
import project1 from "../Images/newsApp.png"
import quotes from "../Images/quotes.png"
import bmi from "../Images/bmi.png"
import tictactoe from "../Images/tictactoe.png"
import currency from "../Images/currency.png"
import cityMap from "../Images/cityMap.png"



import {
    Tab,
    Tabs,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    Button,
    IconButton,
    CardMenu,
    CardText,
} from "react-mdl";
import Modal from "./myModal";
import useModal from './useModal';


function CardComponent(props) {

    const {isShowing, toggle} = useModal();
    return <div>
        <h2>{props.title}</h2>
        <Card shadow={5} className="card-main" >

        <CardTitle className="card_style" style = {{background : props.url} }>

        </CardTitle>
        <CardText className = "text">
            {props.text}
        </CardText>
        <CardActions border>
            <Button colored >Github</Button>
            <Button colored onClick={toggle}>Demo</Button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                title={props.title}
                videoLink={props.videoLink}
            />


        </CardActions>

    </Card>
        </div>;
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }



    toggleCategories(){
        if(this.state.activeTab === 1){
            return(
               <section>
                   <div className="cards_parent">
                       <CardComponent text = "This is first react project" title = "React Project #1" url = "url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center / cover" videoLink ="https://www.youtube.com/watch?v=b_TVmaXB4V8"/>
                       <CardComponent text = "This is second react project" title = "React Project #2" />
                       <CardComponent text = "This is third react project" title = "React Project #3" />


                       <CardComponent text = "This is first react project" title = "React Project #1" />
                       <CardComponent text = "This is second react project" title = "React Project #2" />
                       <CardComponent text = "This is third react project" title = "React Project #3" />
                   </div>
               </section>
            )
        }
        else if(this.state.activeTab === 0){
            return(
                <section>
                    <div className="cards_parent">
                        <CardComponent text = "In this project I have created a newspaper app that fetches news from newsapi.org. The app has divided news in 6 categories based on countries and users can also share any news story." title = "Newspaper App" url = {`url(${project1}) center / contain no-repeat`} />
                        <CardComponent text = "In this project I have created a quote generator app which makes an api request to favqs to generate random quote at each button click." title = "Quotes App"  url = {`url(${quotes}) center / contain no-repeat` } />
                        <CardComponent text = "This app calculates an user's BMI by getting their height and weight as input which can be shared through any social media apps installed in user's phone." title = "BMI App" url = {`url(${bmi}) center / contain no-repeat`}/>


                        <CardComponent text = "A tic-tac-toe app that uses beautiful animation to display user's move and declare a winner" title = "Tic Tac Toe" url = {`url(${tictactoe}) center / contain no-repeat`}/>
                        <CardComponent text = "A currency converter that makes an api call to get the current exchange rate for various currencies." title = "Currency Converter" url = {`url(${currency}) center / contain no-repeat`} />
                        <CardComponent text = "In this app I am using Google Map Api to display the selected city on the google map." title = "City Map" url = {`url(${cityMap}) center / contain no-repeat`}/>
                    </div>
                </section>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is Wordpress</h1>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}ripple>
                    <Tab>Flutter</Tab>
                    <Tab>React</Tab>
                    {/*<Tab>Wordpress</Tab>*/}
                </Tabs>
                <section className="projects_grid">
                    <Grid className="projects_grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        );
    }
}

export default Projects;
