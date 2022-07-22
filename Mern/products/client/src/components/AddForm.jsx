import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        price: 0.01,
        description: ""
    });
    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                // right
                if(res.data.error) {
                    console.log("something went wrong");
                    setErrors(res.data.error.errors);
                }
                // wrong
                else {
                    console.log("looks good");
                    navigate("/");
                }
                
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>Add Products</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" value={form.title} onChange={onChangeHandler} />
                    {errors.title ? <span> {errors.title.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" value={form.price} onChange={onChangeHandler} />
                    {errors.price ? <span> {errors.price.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" value={form.description} onChange={onChangeHandler} />
                    {errors.description ? <span> {errors.description.message}</span> : ""}
                </div>
                <div>
                    <input type="submit" value="Add Product"/>
                </div>
            </form>
        </div>
    );
}

export default AddForm;