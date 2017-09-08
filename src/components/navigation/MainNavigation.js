import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './MainNavigation.scss';
class MainNavigation extends Component{
    render(){
        return(
            <div className="main-navigation">
                <ul className="main-navigation-list">
                    <li className="list-item">Vegetables <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Daily Needs <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Grains <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Cosmetics <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Vegetables <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Daily Needs <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Sweets <i className="fa fa-chevron-down"></i></li>
                    <li className="list-item">Milk & Products <i className="fa fa-chevron-down"></i></li>
                </ul>
            </div>
        );
    }
}
export default MainNavigation;