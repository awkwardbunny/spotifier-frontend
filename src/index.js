import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import config from 'react-global-configuration';
import { DevConfig, ProdConfig } from './config';
config.set(ProdConfig);

ReactDOM.render(<App />, document.getElementById('root'));
