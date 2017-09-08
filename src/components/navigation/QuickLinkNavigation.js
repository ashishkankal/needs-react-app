import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './QuickLinkNavigation.scss';
class QuickLinkNavigation extends Component{
    render(){
        return(
            <div className="quick-link-navigation">
                <ul className="quick-link-navigation-list">
                    <li className="list-item"><i className="fa fa-user"></i> Login</li>
                    <li className="list-item"><i className="fa fa-user-plus"></i> Sign Up</li>
                    <li className="list-item"><i className="fa fa-bell"></i></li>
                    <li className="list-item"><i className="fa fa-thumb-tack"></i> Track Order</li>
                    <li className="list-item"><i className="fa fa-phone"></i>  Customer Care</li>
                    <li className="list-item"><i className="fa fa-android"></i> Download App</li>
                    <li className="list-item">Advertise</li>
                </ul>
            </div>
        );
    }
}
export default QuickLinkNavigation;