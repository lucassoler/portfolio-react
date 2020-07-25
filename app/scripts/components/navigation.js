import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="NavigationBlock">
        <nav id="Navigation" className="navigation-container is-closed">
        <ul>
          <li><a href="#/apropos" className={this.props.route == "apropos" ? 'active' : ''}><i className="material-icons">account_circle</i> A propos</a></li>
          <li><a href="#/parcours" className={this.props.route == "parcours" ? 'active' : ''}><i className="material-icons">verified_user</i> Parcours</a></li>
          <li><a href="#/portfolio" className={this.props.route == "portfolio" ? 'active' : ''}><i className="material-icons">book</i> Portfolio</a></li>
          </ul>
        </nav>
      </div>
    );

  }
  componentDidMount() {
    $('#Navigation').find('li a').click(function() {
      window.scrollTo(0,0);
    });
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
    // config
    var maxBreakpoint = 490; // maximum breakpoint
    var targetID = 'Navigation'; // target ID (must be present in DOM)

    // targeting navigation
    var n = $('#' + targetID);

    // targetID will be initially closed if JS enabled
    n.addClass('is-closed');

    n.find('li').click(function() {
      n.toggleClass('is-closed');
    })

    // global navigation function
    function navi() {
      // when small screen, create a switch button, and toggle targetID class
      if (window.matchMedia("(max-width:" + maxBreakpoint + "px)").matches && document.getElementById("toggle-button") == undefined) {
        n.prepend('<button id="toggle-button"><i class="material-icons">menu</i> Menu</button>');

        var t = $("#toggle-button");
        t.click(function() {
          n.toggleClass('is-closed');
        });
      }
      // when big screen, delete switch button, and toggle navigation class
      var minBreakpoint = maxBreakpoint + 1;
      if (window.matchMedia("(min-width: " + minBreakpoint + "px)").matches && document.getElementById("toggle-button")) {
        document.getElementById("toggle-button").outerHTML = "";
      }
    }
    navi();
    // when resize or orientation change, reload function
    window.addEventListener('resize', navi);
  }

}