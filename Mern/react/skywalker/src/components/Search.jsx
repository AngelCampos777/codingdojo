import { useState} from 'react';
import { useNavigate} from "react-router-dom";

const Search = props => {
    const [page, setPage] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const sendSearch = e => {
        e.preventDefault();
        navigate(`/${page}/${id}`)

    }
    return(
        <>
        <h2>Search for:</h2>
        <form onSubmit={ sendSearch }>
            <div>
                {/* should select and route to page, using navigate?
                how does it choose based on form input
                navigate("/" + page)? */}
                <select onChange={(e) => setPage(e.target.value)}>
                    <option default value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
            </div>
            <div>
                {/* variable thats passed into the route like input pokemon? use param = val? 
                person:id || place:id? */}
                <label htmlFor="id">Id</label>
                <input type="number" name='id' min={0} onChange={(e) => setId(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Search"/>
                {/* where does this go on submission, where can i pull the info from to pass it into something else? */}
            </div>
        </form>
        </>
    );
}
export default Search;