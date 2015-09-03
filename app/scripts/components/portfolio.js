import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        item : {},
        items : [],
        categories : []
    }
  }
  componentDidMount() {
    this.getData(); 

  }
  getData(filtre = null) {
    var datas = require('../../datas/portfolio.json');
    var items = [];
    var categories = []
    datas.map((item, index) => {
      if(categories.indexOf(item.category) === -1) categories.push(item.category);
      if(filtre && item.category == filtre) {
        items.push(item);
      } else if(!filtre) {
        items.push(item);
      }
    })
    this.setState({items, categories, filtre});
  }
  render() {
    var view = "";
    if(this.state.item.name) {
      var divStyle = {
        backgroundImage : 'url(../../images/portfolio/' + this.state.item.picture + ')'
      };
      var voir = "";
      if (this.state.item.url) {
        voir = <a target="_blank" href={this.state.item.url}><i className="material-icons">link</i> Voir</a>;
      }
      view = <div id="Portfolio-viewOne" className="Portfolio-viewOne">
          <div style={divStyle} className="preview"></div>
          <div className="info">
            <h2>
              {this.state.item.name}
            </h2>
            <p>{this.state.item.description}</p>
            <p className="tags"><small>{this.state.item.tags}</small></p>
            {voir} <a href="javascript:void(0)" onClick={this.bindData.bind(this, {})}><i className="material-icons">close</i> Fermer</a>
          </div>
      </div>
    }
    return (
      <div className="Portfolio">
        {view}
        <div className="content">
          <h1>Quelque Réalisations récentes</h1>
          <div className="Portfolio-listcategories">
            <a href="javascript:void(0)" onClick={this.getData.bind(this, null)}>Tous</a>
            {this.state.categories.map(this.renderCategories, this)}
          </div>
          <ul className="Portfolio-listitems">{this.state.items.map(this.renderItem, this)}</ul>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
  renderItem(item, index) {
    var divStyle = {
      backgroundImage : 'url(../../images/portfolio/' + item.thumb + ')'
    };
    var voir = "";
    if (item.url) {
      voir = <a target="_blank" href={item.url}><i className="material-icons">link</i> Voir</a>;
    }
    return (
        <li key={index}>
          <div className="Portfolio-itemPicture" style={divStyle}></div>
          <div className="Portfolio-itemDesc">
            <p>{item.tags}</p>
            <h4>{item.name}</h4>
          </div>
          <div className="Portfolio-itemActions" onClick={this.bindData.bind(this, item)}>
            <a href="javascript:void(0)" onClick={this.bindData.bind(this, item)}><i className="material-icons">info</i> Détails</a>
            {voir}
          </div>
        </li>

    );
  }
  renderCategories(item, index) {
    return (
      <a key={index} href="javascript:void(0)" onClick={this.getData.bind(this, item)}>{item}</a>    

    );
  }
  bindData(item) {
      var state = this.state;
      state.item = item;
      this.setState(state);
      var view = $('#NavigationBlock');
      if(view.offset()) {
        var offset = view.offset().top;
        $('html, body').animate({
          scrollTop : offset
        }, 500);

      }
  }

}