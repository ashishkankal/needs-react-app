import React, { Component } from 'react';
import logo from './../../images/logo.png';
import SearchBar from './SearchBar';
import MainNavigation from './../navigation/MainNavigation';
class Header extends Component{
    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <SearchBar/>
                <MainNavigation/>
            </div>
          );
    }
}
export default Header;