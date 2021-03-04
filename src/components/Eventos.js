import React from 'react';

export class EventosES6 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
        }
        /*
            Enlazamos el metodo de suma al contexto this de la clase,
            si no lo hacemos entonces this dentro de el metodo suma va ser undefined
        */
        this.sumar = this.sumar.bind(this)
        /**
         * Hacemos lo mismo para la resta
         */
        this.restar = this.restar.bind(this)
        console.log(this)
    }

    //Recordar que todas las funciones que estan enlazadas a un evento js reciben como parametro el event (e)
    sumar(e) {
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e) {
        console.log("Restando")
        console.log(this) // ya como enlazamos arriba this entonces this va ser la clase
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render() {
        return (
            <div>
                <h2>Eventos y binding ES6</h2>
                <button onClick={this.sumar} > + </button>
                <button onClick={this.restar} > - </button>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Property Initializer  es otra forma de enalzar this al contexto de una clase
export class EventosES7 extends React.Component {
    state = {
        contador: 0,
    }
    sumar = (e) => {
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        console.log("Restando")
        console.log(this)
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render() {
        return (
            <div>
                <h2>Eventos y binding ES7</h2>
                <button onClick={this.sumar} > + </button>
                <button onClick={this.restar} > - </button>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}


function Boton(props) {
    return (
        <>
            {/* ACA SI PODEMOS LLAMAR EL onClick POR QUE ES UN ELEMENTO JSX DE REACT
            Y EJECUTAMOS LA FUNCION QUE LE PASAMOS COMO PROP DONDE SE INVOCO EL COMPONENTE */}
            <button onClick={props.MyOwnOnClick} >Boton hecho componente</button>
        </>
    )
}

//Podemos simplificar aun mas el componente de la siguiente manera
//const Boton = (props) => (<button onClick={props.MyOwnOnClick} >Boton hecho componente</button>)


//https://es.reactjs.org/docs/events.html  <-- Eventos Systenticos react docs
export class MasSobreEventos extends React.Component {
    handleClick = (e, mensajeEnEvento) => {
        console.log('Native event JS: ', e.nativeEvent);
        console.log('Syntethic event react: ', e);
        console.log('Target con React', e.target);
        console.log('Target native js', e.nativeEvent.target);
        console.log(mensajeEnEvento);
    }
    render() {
        return (
            <div>
                <h2>Eventos Sinteticos y nativos de JS</h2>
                <span>
                    Click para ver diferencia entre
                    eventos Sinteticos de react y eventos nativos de JS
                    resultado en consola
                 </span>
                <br />
                <button onClick={(e) => this.handleClick(e, 'Pasando parametro desde un evento')} >Click Aqui !</button>
                {/* RECORDAR QUE A LOS COMPONENTES NO LES PODEMOS PASAR EVENTOS DIRECTAMENTE */}
                {/* <Boton onClick={(e) => this.handleClick(e, 'Pasando parametro desde un evento')} /> */}

                {/* PARA PASARLE EVENTOS A UN COMPONENTE DEBEMOS PASAR LA FUNCION COMO UNA PROP */}
                <Boton MyOwnOnClick={(e) => this.handleClick(e, 'Pasando parametro desde un evento')} />
            </div>
        );
    }
}