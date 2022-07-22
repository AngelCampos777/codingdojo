import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReadAll = props => {
    const [products, setProduct] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2>All Products</h2>
            <div className='flex'>
                {
                    products ? products.map((item, i) => <Link to={`/products/${item._id}`}><div key={i} className='card'>
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.description}</h3>
                    </div></Link>) : ""
                }
            </div>
        </div>
    );
}

export default ReadAll;