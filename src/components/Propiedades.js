import React from 'react';
import PropTypes from 'prop-types';

export default function Props(props) {
    return (
        <div>
            <h2>PASANDO PROPS</h2>
            <ul>
                <li>{props.propDefault}</li>
                <li>{props.cadena}</li>
                <li>{props.cadena ? 'Es true' : 'False'}</li>
                <li>{props.numero}</li>
                <li>{props.arreglo.join(" - ")}</li>
                <li>{props.objeto.nombre} - {props.objeto.edad}</li>
                <li>{props.elementoReact}</li>
                <li>ACA SE PASO UNA FUNCION : {props.arreglo.map(props.funcion).join(" - ")}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    )
}

Props.defaultProps = {
    propDefault: 'Esta es por defecto'
}

//Cuando la prop no recibe el tipo esperado lanza un warning en la consola
Props.propTypes = {
    numero: PropTypes.number.isRequired
}