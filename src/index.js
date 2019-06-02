import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes'
import Header from './components/Header'
import MusicMaster from './projects/music-master'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={() => <Header><App /></Header>} />
            <Route path="/jokes" render={() => <Header><Jokes /></Header>} />
            <Route path="/music-master" render={() => <Header><MusicMaster /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
 );
