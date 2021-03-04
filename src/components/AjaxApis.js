import React, { Component } from 'react';

function Pokemon(props) {
    return (
        <figure>
            <img src={props.img} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}


class AjaxApis extends Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        this.getAll()
    }

    getAll() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(json => json.results.forEach(el => this.getByUrl2(el.url)))
    }

    // getByUrl(url) {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => {
    //             let pokemon = {
    //                 id: json.id,
    //                 name: json.name,
    //                 img: json.sprites.front_default
    //             }
    //             this.setState({ pokemons: [...this.state.pokemons, pokemon] })
    //         })
    // }

    async getByUrl2(url) {
        let response = await fetch(url)
        response = await response.json()
        let pokemon = { id: response.id, name: response.name, img: response.sprites.front_default }
        this.setState({ pokemons: [...this.state.pokemons, pokemon] })
    }

    render() {
        return (
            <>
                <h2>Peticiones Asincronas Componentes React</h2>
                {this.state.pokemons.length === 0 ?
                    <h2>Cargando...</h2> :
                    this.state.pokemons.map(el => <Pokemon key={el.id} img={el.img} name={el.name} />)
                }
            </>
        );

    }
}
export default AjaxApis;