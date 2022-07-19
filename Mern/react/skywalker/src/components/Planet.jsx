import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Planet = props => {
    const [planet, setPlanet] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id).then(res => setPlanet(res.data))
    }, [id])
    

    return(
        <>
            <h2>Planet</h2>
            <h2>Name: {planet.name}</h2>
            <h2>Climate: {planet.climate}</h2>
            <h2>Gravity: {planet.gravity}</h2>
            <h2>Terrain: {planet.terrain}</h2>
        </>
    );
}

export default Planet;