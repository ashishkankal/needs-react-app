import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './SideBar.scss';
class SideBar extends Component{
    render(){
        return(
            <div className="sidebar">
                <ul className="navigation-parent">
                    <li className="">
                        <span className="navigation-parent-header">References</span>
                        <ul className="navigation-child">
                            <li>
                                <NavLink to="/reference/colors" activeClassName="active" className="sidebarSubanchor" >Colors</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reference/typography" activeClassName="active" className="sidebarSubanchor" >Typography</NavLink>                            
                            </li>
                        </ul>
                    </li>
                    <li className="">
                    <span className="navigation-parent-header">Components</span>
                    <ul className="navigation-child">
                        <li>
                            <NavLink to="/buttons" activeClassName="active" className="sidebarSubanchor" >Buttons</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dropdown" activeClassName="active" className="sidebarSubanchor" >DropDown</NavLink>                            
                        </li>
                        <li>
                            <NavLink to="/forms" activeClassName="active" className="sidebarSubanchor" >Form Fields</NavLink>                            
                        </li>
                        <li>
                            <NavLink to="/radio" activeClassName="active" className="sidebarSubanchor" >Radio Buttons</NavLink>                            
                        </li>

                        <li>
                            <NavLink to="/icons" activeClassName="active" className="sidebarSubanchor" >Icons</NavLink>                            
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        );
    }
}
export default SideBar