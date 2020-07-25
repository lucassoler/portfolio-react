import React from 'react';
import Competencies from './competencies';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        competencies : {}
    }
  }
  render() {
    let about = <p>Ma passion pour les technologies du <strong>Web et Mobile</strong> s'est éveillé au cours du D.U.T Services et Réseaux de Communication. J'ai pu pratiquer le <strong>développement d'application</strong> mais aussi toutes les disciplines rencontrées au cours de l'élaboration d'un site web dans les différents réalisés.
     Au fur et à mesure de ma formation, j'ai gagné en <strong>expérience, vitesse et technique</strong>. De plus, mes nombreux projets personnels m'ont permis de tester différentes technologies innovantes comme NodeJS, React, AngularJS, Cordova, PhoneGap, etc.
     Titulaire d'un <strong>BAC+5 Chef de projet Web</strong> et fort de mes 4 années d'éxpérience en tant que développeur Full-Stack, je suis actuelement à la recherche d'un travail.
    </p>;
    let backend = <p>Conception d'<strong>API RESTfull</strong>, d'architecture <strong>MVC</strong> ... Maîtrise des langages et frameworks serveurs JavaScript (<strong>NodeJS</strong>), PHP (<strong>CodeIgniter, Symfony, Zend</strong>), Python (<strong>Django</strong>), Ruby (<strong>Ruby On Rails</strong>) ... Conception et migration de serveur sur les environements <strong>Ubuntu</strong>, <strong>Debian</strong>, <strong>Windows</strong>. </p>;
    let frontend = <p>Développement d'application front-end <strong>sur-mesure</strong>, avec ou sans <strong>CMS</strong>. Utilisation de templates ou <strong>intégration</strong> de design adapté aux <strong>besoins</strong> de l'application. Utilisation de <strong>moteurs de templates</strong> (Twig, Smarty, Timber, ...) et utilisation de frameworks JavaScript (<strong>AngularJS</strong>, <strong>React</strong>, ...) </p>;
    let ergonomie = <p>Recherche de l'<strong>expérience optimale</strong> pour l'utilisateur sur toutes les <strong>plateformes</strong> et tous les <strong>navigateurs</strong>.</p>;
    let gestion = <p><strong>Estimation</strong> du temps de travail et réalisation de <strong>planning</strong>, diagramme de <strong>Gantt</strong>, ... Maîtrise des outils de <strong>travail collaboratif</strong> (Git, Github) et de <strong>gestion de projet</strong>.</p>;
    return (
      <div className="About content">
        <div className="bloc100 bloc wow slideInUp">
          <h3>A propos</h3>
          <p>{about}</p>
        </div>
        <div className="bloc50 bloc wow slideInUp">
          <i className="material-icons">code</i>
          <h3>Back-end</h3>
          <p>{backend}</p>
        </div>
        <div className="bloc50 bloc wow slideInUp">
          <i className="material-icons">chrome_reader_mode</i>
          <h3>Front-end</h3>
          <p>{frontend}</p>
        </div>
        <div className="bloc50 bloc wow slideInUp">
          <i className="material-icons">devices</i>
          <h3>Ergonomie</h3>
          <p>{ergonomie}</p>
        </div>
        <div className="bloc50 bloc wow slideInUp">
          <i className="material-icons">supervisor_account</i>
          <h3>Gestion de Projet</h3>
          <p>{gestion}</p>
        </div>
        <div className="bloc100 bloc wow slideInUp">
          <h3>Compétences</h3>
          <Competencies />
        </div>
        <div className="clear"></div>
      </div>
    );
  }

}