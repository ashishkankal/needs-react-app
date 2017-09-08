import React, { Component } from 'react';
import logo from './../../images/logo.png';
import './SearchBar.scss';
class SearchBar extends Component{
    render(){
        return(
                 <div className="input-group search-bar">
                    <input type="text" className="form-control search-input" placeholder="What do you need ?"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><i className="fa fa-2x fa-search"></i></button>
                    </span>
                </div>
          );
    }
}
export default SearchBar;