import React, {Component} from 'react';
import "../styling/projects.css"
import project1 from "../Images/newsApp.png"

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
import MyModal from "./myModal";


function CardComponent(props) {

    const [modalShow, setModalShow] = React.useState(false);

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
            <Button colored onClick={(e) => setModalShow(true)}>Demo</Button>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
        if(this.state.activeTab === 0){
            return(
               <section>
                   <div className="cards_parent">
                       <CardComponent text = "This is first react project" title = "React Project #1" url = "url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center / cover" />
                       <CardComponent text = "This is second react project" title = "React Project #2" />
                       <CardComponent text = "This is third react project" title = "React Project #3" />


                       <CardComponent text = "This is first react project" title = "React Project #1" />
                       <CardComponent text = "This is second react project" title = "React Project #2" />
                       <CardComponent text = "This is third react project" title = "React Project #3" />
                   </div>
               </section>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <section>
                    <div className="cards_parent">
                        <CardComponent text = "In this project I have created a newspaper app that fetches news from newsapi.org. The app has divided news in 6 categories based on countries and users can also share any news story." title = "Newspaper App" url = {`url(${project1}) center / cover`} />
                        <CardComponent text = "This is second flutter project" title = "Flutter Project #2" />
                        <CardComponent text = "This is third flutter project" title = "Flutter Project #3" />


                        <CardComponent text = "This is first flutter project" title = "Flutter Project #1" />
                        <CardComponent text = "This is second flutter project" title = "Flutter Project #2" />
                        <CardComponent text = "This is third flutter project" title = "Flutter Project #3" />
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
                    <Tab>React</Tab>
                    <Tab>Flutter</Tab>
                    <Tab>Wordpress</Tab>
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
