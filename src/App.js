import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Router from './Router';
import SideBar from './components/navigation/SideBar';
import QuickLinkNavigation from './components/navigation/QuickLinkNavigation';
import './components/common/pageContainer.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <QuickLinkNavigation/>
        <Header/>
        <div className="db-page-container">
          <div className="col-lg-9 col-md-9 col-sm-9">
              {this.props.children}
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
                <SideBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
