import React, { Component } from 'react';


class Reloj extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log(3, 'El componente se desmonto')
    }

    render() {
        return (
            <>
                <h3>{this.props.hora}</h3>
            </>
        );
    }
}


export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        console.log(0, "Inicializando componente Aun No esta en el DOM")
        this.temporizador = null;
    }

    titac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000)
    }

    iniciar = () => {
        this.titac()
        this.setState({
            visible: true
        })
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }


    componentDidMount() {
        console.log(1, 'El componente ya se encuenta en el DOM')
    }

    /**
     * Este metodo del ciclo de vida me permite pasar
     * las propiedades y el estado previo al momento de la actulizacion
     */
    componentDidUpdate(prevProps, prevState) {
        console.log(2, 'El estado o las props del componente han cambiado y se vuelve a redibujar')
        console.log(prevProps)
        console.log(prevState)
    }

    render() {
        console.log(4, "El componente se dibuja o redibuja por algun cambio del DOM")
        return (
            <>
                <h2>Ciclo de vida de los componentes</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar} >Iniciar</button>
                <button onClick={this.detener} >Detener</button>
            </>
        );
    }
}