import React, { useState } from 'react';

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

    return (
        <>
            <h2>Uso del Hook useState</h2>
            <p>Contador de {props.title}</p>
            {contador}
            <nav>
                <button onClick={sumar} > + </button>
                <button onClick={restar} > - </button>
            </nav>
        </>
    )
}

ContadorHooks.defaultProps = {
    title: "Clicks"
}