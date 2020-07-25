import React from 'react';
import Navigation from './navigation';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <div className="Header-banner">
            <img className="Header-bannerImg" src='../images/lucas.jpg' width="100" height="100" alt="Lucas" />
            <h1 className="Header-bannerDesc">Développeur Full-Stack</h1>
            <h3 className="Header-bannerTitle">Soler Lucas</h3>
          </div>
          <div className="clear"></div>
        </div>
        <Navigation route={this.props.route}/>
      </div>
    );
  }

}