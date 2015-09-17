'use strict';
import React from 'react';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }
    componentDidMount() {
        this.getData(); 

    }
    getData() {
        var items = require('../../datas/timeline.json');
        console.log(items);
        this.setState({items});
    }
    render() {
        return (
            <div className="Timeline">
                <ul className="timeline">{this.state.items.map(this.renderItem, this)}</ul>
            </div>
        )
    }
    renderItem(item, index) {
        var direction = "direction-" + item.direction,
            type = "flag " + (item.type || "");

        return (
            <li key={index}>
                <div className={direction}>
                    <div className="flag-wrapper">
                        <span className={type}>
                            <a href={item.flagLink} alt={item.flag} title={item.flag} target="_blank">
                                {item.flag}
                            </a>
                        </span>
                        <span className="time-wrapper">
                            <span className="time">{item.flagTime}</span>
                        </span>
                    </div>
                    <div className="desc">{item.description}</div>
                </div>
            </li>
        )
    }
}