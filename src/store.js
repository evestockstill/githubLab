const { createStore, applyMiddleware, compose } = require('redux');
import thunk from 'redux-thunk';
import reducer from './reducer/userReducer';

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
