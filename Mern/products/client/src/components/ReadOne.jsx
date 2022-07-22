import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReadOne = props => {
    const [oneProduct, setOneProduct] = useState(null);
    const { _id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res => setOneProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            {
                oneProduct ? <div>
                    <h2>{oneProduct.title}</h2>
                    <h2>{oneProduct.price}</h2>
                    <h2>{oneProduct.description}</h2>
                </div> : ""
            }
        </div>
    );
}

export default ReadOne;