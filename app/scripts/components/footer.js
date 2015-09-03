import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Footer">
          <div className="contact">
             <a href="fefe"><p><i className="material-icons">email</i> lucas.soler38[@]gmail.com</p></a>
             <a href="fefe"><p><i className="material-icons">phone</i> 06 58 31 47 67</p></a>

          </div>
         <div className="links">
            <a href="http://www.viadeo.com/fr/profile/0021c13xdn5v9bxl?readOnly&amp;language=fr&amp;ga_from=Fu:%2Fprofilev3%2F;Fb%3Aprofile-Top-bouton%3BFe%3Apreview%3B" title="lien vers le compte viadeo de Lucas SOLER"><i className="ion-social-vimeo"></i></a>
            <a href="http://fr.linkedin.com/in/lucassoler/" title="lien vers le compte linkedin de Lucas SOLER"><i className="ion-social-linkedin"></i></a>
         </div>
      </div>
    );
  }

}