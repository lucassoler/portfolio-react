import React from 'react';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        competencies : []
    }
  }  
  componentDidMount() {
    this.getData(); 
  }
  getData() {
    var competencies = require('../../datas/competencies.json');
    this.setState({competencies});
  }
  render() {
  	return (
      <div className="Competencies content">
      	<ul>
      		{this.state.competencies.map(this.renderItem, this)}
      	</ul>
      </div>
  	);
  }
  renderItem(item, index) {
  	var divStyle = { 
  		height : item.total + "%"
  	}
    return (
        <li key={index} className="competenciesItems">
        	<div className="chart">
        		<div className="wow slideInUp" style={divStyle}></div>
        		<p>{item.total} %</p>
        	</div>
        	<h4>{item.name}</h4>
        </li>

    );

  }

}