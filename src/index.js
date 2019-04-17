import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import { Switch } from 'react-router-dom';
import AllUsers from './components/AllUsers'
import EditComponent from './components/EditComponent'
import UserInfo from './components/UserInfo'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {browserHistory} from 'react-router'
import {store} from './store/configureStore'

export const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>

ReactDOM.render(
    <Provider store={store}>
         <Router history={browserHistory} >    
            <div>
                <Switch>
                     <Route
                        exact path='/'
                        component={App }
                    /> 
                    <Route 
                        exact path='/user-edit/:id'
                        component={ EditComponent }
                    /> 
                    <Route
                        exact path='/users'
                        component={ AllUsers }
                    />
                      <Route
                        path='/users/:id'
                        component={ UserInfo }
                    />   
                    <Route 
                        component={Whoops404} />
                </Switch>

            </div>
        </Router> 
        
    </Provider>, document.getElementById('root'));
registerServiceWorker();

