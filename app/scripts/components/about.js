import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="About content">
        <div className="bloc100 bloc">
          <h3>A propos</h3>
          <p>Début...</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">code</i>
          <h3>Back-end</h3>
          <p>Développement sur-mesure back</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">lock</i>
          <h3>Sécurité</h3>
          <p>Développement sur-mesure back</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">chrome_reader_mode</i>
          <h3>Front-end</h3>
          <p>Développement sur-mesure back</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">devices</i>
          <h3>Ergonomie</h3>
          <p>Développement sur-mesure</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">web</i>
          <h3>Webdesign</h3>
          <p>Développement sur-mesure back</p>
        </div>
        <div className="bloc50 bloc">
          <i className="material-icons">supervisor_account</i>
          <h3>Gestion de Projet</h3>
          <p>Développement sur-mesure back</p>
        </div>
        <div className="clear"></div>
      </div>
    );
  }

}