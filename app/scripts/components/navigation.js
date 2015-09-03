import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="NavigationBlock">
        <div id="Navigation" className="navigation-container">
        	<ul>
          	<li><a href="#/apropos" className={this.props.route == "apropos" ? 'active' : ''}><i className="material-icons">account_circle</i> A propos</a></li>
            <li><a href="#/parcours" className={this.props.route == "parcours" ? 'active' : ''}><i className="material-icons">verified_user</i> Parcours</a></li>
          	<li><a href="#/portfolio" className={this.props.route == "portfolio" ? 'active' : ''}><i className="material-icons">book</i> Portfolio</a></li>
          </ul>
           <div className="clear"></div>
        </div>
      </div>
    );

  }
  componentDidMount() {
    //Floatable
    var positionElementInPage = $('#NavigationBlock').offset().top;
    $(window).scroll(
        function() {
            if ($(window).scrollTop() >= positionElementInPage) {
                // fixed
                $('#NavigationBlock').addClass("floatable");
            } else {
                // relative
                $('#NavigationBlock').removeClass("floatable");
            }
        }
    );
  }

}