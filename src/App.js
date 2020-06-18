import React from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (



    <div className="demo-big-content">
        <Layout>
            <Header className="header_color" title="My Portfolio" scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contactme">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contactme">Contact Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>

);
}

export default App;
