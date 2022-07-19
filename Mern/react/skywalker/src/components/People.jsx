import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const People = props => {
    const [people, setPeople] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id).then(res => setPeople(res.data))
    }, [id])
    

    return(
        <>
        {/* call, then render then check against place and pick and choose from form later */}
            <h2>People</h2>
            <h2>Name: {people.name}</h2>
            <h2>Hair Color: {people.hair_color}</h2>
            <h2>Mass: {people.mass}</h2>
            <h2>Height: {people.height}</h2>

        </>
    );
}

export default People;