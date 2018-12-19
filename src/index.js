import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import './static/css/reset.css'
import './static/plug/IconFont/css/font-awesome.css'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
