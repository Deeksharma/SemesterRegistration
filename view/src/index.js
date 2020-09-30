import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer'
import { CookiesProvider } from 'react-cookie';
import { sessionService } from 'redux-react-session';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({

    auth: reducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES' };
const validateSession = (session) => {
    // check if your session is still valid
    return true;
}
sessionService.initSessionService(store, options, validateSession).then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
    .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));
ReactDOM.render( 

    <CookiesProvider >
    <Provider store = { store } > < App / > 
    </Provider> 
    </CookiesProvider> 
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();