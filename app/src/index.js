/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


/*
 * Local import
 */
import App from 'src/components/App';


/*
 * Code
 */
const node = document.getElementById('root');
render(<App />, node);
