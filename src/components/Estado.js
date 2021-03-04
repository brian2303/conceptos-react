import React, { Component } from 'react'

function ComponenteHijo(props) {
    return (
        <strong>{props.estadoAHijo}</strong>
    )
}

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }

        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador + 1
        //     })
        // }, 1000)
    }

    render() {
        return (
            <>
                <h1>Estado</h1>
                <strong>{this.state.contador}</strong>
                <ComponenteHijo estadoAHijo={this.state.contador} />
            </>
        )
    }
}