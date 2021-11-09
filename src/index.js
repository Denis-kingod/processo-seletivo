import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   Route,
//   BrowserRouter as Router,
//   Switch,
// } from 'react-router-dom';

import './index.css';

import Home from './Page/Home/App';
import Usuario from './Page/Usuario/Usuario.jsx';
// import NotFound from './Page/notFound/NotFound';


// import reportWebVitals from './reportWebVitals';

// const routing = (
//   <Router>
//     <div>
//       <Usuario />     
//     </div>
//   </Router>
// );

ReactDOM.render(
  <Usuario />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();