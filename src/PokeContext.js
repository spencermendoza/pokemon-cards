import React, { Component } from 'react';

const PokeContext = React.createContext();
const { Provider, Consumer } = PokeContext;

class PokeProvider extends Component {
    state = {
        pokemonList: [],
    }

    componentDidMount() {
        console.log('just testing things');
    }

    onClickTesting = () => {
        console.log('still testing');
    }

    render() {
        return <Provider
            value={{
                onClickTesting: this.onClickTesting,
            }}>{this.props.children}</Provider>
    }
}

export { PokeContext, PokeProvider, Consumer as PokeConsumer };