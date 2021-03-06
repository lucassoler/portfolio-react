import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Footer">
          <div className="contact">
             <a href="mailto:lucas.soler38@gmail.com"><p><i className="material-icons">email</i> lucas.soler38[@]gmail.com</p></a>
             <a href="tel:+33658314767"><p><i className="material-icons">phone</i> 06 58 31 47 67</p></a>

          </div>
         <div className="links">            
            <a href="http://fr.linkedin.com/in/lucassoler/" title="lien vers le compte linkedin de Lucas SOLER"><i className="ion-social-linkedin"></i></a>
            <a href="https://github.com/lucassoler" title="lien vers le compte Github de Lucas SOLER"><i className="ion-social-github"></i></a>
         </div>
      </div>
    );
  }

}