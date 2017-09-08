import React, {Component} from 'react';
import './Colors.scss';
class Colors extends Component{
    render(){
        return(
            <div>
                <h4>Primary Colors</h4>
                <div className="color-swatch-container cream">
                    <div className="color-swatch"></div>
                    <div className="color-name">gfhfgh</div>
                </div>
                <div className="color-swatch-container">
                    <div className="color-swatch"></div>
                    <div className="color-name">gfhfgh</div>
                </div>
                <div className="color-swatch-container">
                    <div className="color-swatch"></div>
                    <div className="color-name">gfhfgh</div>
                </div>

            </div>
        );
    }
}
export default Colors;