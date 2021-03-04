import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <>
                <p>Contador del padre alterado por los hijos : <b>{this.state.contador}</b></p>
                <h2>Comunicacion entre Componentes</h2>
                <Hijo incrementarContador={this.incrementarContador} mensaje='Soy el hijo 1' />
                <Hijo incrementarContador={this.incrementarContador} mensaje='Soy el hijo 2' />
            </>
        );
    }
}

function Hijo(props) {
    return (
        <>
            <p>{props.mensaje}</p>
            <button onClick={props.incrementarContador} >+</button>
        </>
    )
}