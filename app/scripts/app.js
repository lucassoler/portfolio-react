import React from 'react';
import Home from './components/home';
import { Router, Route } from 'react-router'

console.log(Router)

window.React = React;
const mountNode = document.getElementById('app');
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
const About = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: "fefe"
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user}</h2>
      </div>
    )
  }
})
function render () {
	console.log(Home)
  	var route = window.location.hash.substr(2);
  	React.render(<Home route={route} />, mountNode);
}
new WOW().init();

React.render((
  <Router>
    <Route path="/" component={App}>
      	<Route path="/about" component={About}/>
    </Route>
  </Router>
), mountNode)
//window.addEventListener('hashchange', render);
//render(); // render initially