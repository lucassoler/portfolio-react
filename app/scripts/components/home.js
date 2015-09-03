import React from 'react';
import Header from './header';
import Footer from './footer';
import About from './about';
import Portfolio from './portfolio';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Bootstrap',
        'Modernizr'
      ]
    };
  }

  render() {

    var Child;
    switch (this.props.route) {
      case 'about': Child = About; break;
      case 'portfolio': Child = Portfolio; break;
      default:      Child = About;
    }
    return (
      <div className="hero-unit">
        <div className="site-container">
          <Header route={this.props.route} />
          <Child/>
        </div>
        <Footer/>
      </div>
    );
  }

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}