import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


/**
 * The `root` constant represents the root of the React application.
 * It is created using the `ReactDOM.createRoot` method, which initializes
 * a React root for rendering components. The root is associated with the
 * DOM element obtained by `document.getElementById('root')`.
 * 
 * This DOM element serves as the container where the React component tree
 * will be rendered. The `createRoot` method is part of React's concurrent
 * rendering API, enabling features like concurrent mode and improved
 * rendering performance.
 */
const root = ReactDOM.createRoot(document.getElementById('root')); //* Mentioned in index.html
root.render(
  <React.StrictMode>

    {/* It activates additional checks and warnings for its descendants. */}
    <App />
  </React.StrictMode>
);


