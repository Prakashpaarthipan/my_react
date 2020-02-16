import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="appHeader" title="Prakash Portfolio" scroll>
          <Navigation>
            <Link className="headerlink" to="/about">About Me</Link>
            <Link className="headerlink" to="/resume">Resume</Link>
            <Link className="headerlink" to="/projects">Projects</Link>
            <Link className="headerlink" to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Prakash">
          <Navigation>
            <Link to="/about">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
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
