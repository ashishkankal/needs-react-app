import React, {Component} from 'react';
import './buttons.scss';
class Buttons extends Component{
    render(){
        return(
            <div>
                <h4>Primary Buttons</h4>
                <button className="db-button db-button-default">Button</button>
                <button className="db-button btn-primary">Button</button>
                <button className="db-button btn-warning">Button</button>
                <button className="db-button btn-danger">Button</button>
                </div>
        );
    }
}
export default Buttons;