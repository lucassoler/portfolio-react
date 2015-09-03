import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

function render () {
  var route = window.location.hash.substr(2);
  React.render(<Home route={route} />, mountNode);
}


window.addEventListener('hashchange', render);
render(); // render initially