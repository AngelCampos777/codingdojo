import axios from "axios";
import { useEffect, useState } from 'react';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(res => setPokemon(res.data.results))
    }, [])


    return(
        <div>
            <h2>my call</h2>
            {pokemon ? pokemon.map((poke,i) => {
                return(<div key={i}><ul>{poke.name}</ul></div>)
            }) : null}
        </div>
    );
}

export default ApiCall;