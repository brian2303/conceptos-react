import React, { Component } from 'react'

function Login() {
    return (
        <div>
            <h2>Login</h2>
        </div>
    )
}

function Logout() {
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}


export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)
        this.state = {
            session: true
        }
    }
    render() {
        return (
            <div>
                <h1>Renderizado condicional</h1>
                {this.state.session ? <Login /> : <Logout />}
            </div>
        );
    }
}