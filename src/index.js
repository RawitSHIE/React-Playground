import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/jokes" component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
 );
