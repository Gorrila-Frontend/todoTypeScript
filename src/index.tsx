
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import Login from './containers/Login';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
<Switch>
  <Route exact path='/'component={Home} />
  <Route  path='/login' component={Login}/>
  <Route  path='/app' component={App}/>
</Switch>
</BrowserRouter>
  </Provider>
,
  document.getElementById('root') as HTMLElement
);
