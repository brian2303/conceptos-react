import React, { Component } from 'react';
import data from '../helpers/data.json'

function ElementoLista(props) {
    return (
        <li>
            <a href={props.el.link}>{props.el.name}</a>
        </li>
    )
}



export default class Render extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frameworks: data.frameworks
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.frameworks.map(el => <ElementoLista key={el.id} el={el} />)}
                </ul>
            </div>
        );
    }
}