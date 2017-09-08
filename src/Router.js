import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Default from './components/default/Default';
import Home from './components/home/Home';
import Colors from './components/references/Colors';
import Buttons from './components/buttons/Buttons';
const Router = () =>
    <BrowserRouter>
        <App>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/reference/colors" component={Colors}/>
                    <Route path="/buttons" component={Buttons}/>
                    </Switch>
            </div>
        </App>
    </BrowserRouter>
export default Router;