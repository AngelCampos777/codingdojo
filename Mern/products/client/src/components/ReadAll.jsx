import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReadAll = props => {
    const [products, setProduct] = useState(null);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [update])
    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(() => setUpdate(!update))
            .catch(err => console.log("couldn't delete", err))
    }
    return(
        <div>
            <h2>All Products</h2>
            <div className='flex'>
                {
                    products ? products.map((item, i) => <div key={i} className='card'>
                        <Link to={`/products/${item._id}`}>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                            <h3>{item.description}</h3>
                        </Link>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                        <Link to={`/update/${item._id}`}><button>Edit</button></Link>
                    </div>) : ""
                }
            </div>
        </div>
    );
}

export default ReadAll;