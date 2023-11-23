// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Config } from "./config";


/**
 *
 * @desc Fetch config.json file and changes Config static properties to the values on the file
 */
const fetchConfig = async () => {
    try {
        // Fetch config.json
        const configFile = await fetch("/config.json");
        // Get values as JSON
        const coinfigFileValues = await configFile.json();

        // Change Config class static values to the values on the file
        Object.keys(coinfigFileValues).forEach((key) => {
            Config[key] = coinfigFileValues[key];
        });
    } catch (e) {
        console.log(e);
    }
};

// Load app after we have fetch the values, this way we avoid race conditions, and we make sure we get the values from the file
fetchConfig().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
});



