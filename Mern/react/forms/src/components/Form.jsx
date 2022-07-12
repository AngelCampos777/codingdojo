import { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [canRender, setCanRender] = useState(false);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setCanRender(true);
    }

    const TextValid1 = input =>{
        if(input.length < 2){
            return false;
        }
        return true;
    }
    const TextValid2 = input =>{
        if(input.length < 5){
            return false;
        }
        return true;
    }
    const TextValid3 = input =>{
        if(input.length < 8){
            return false;
        }
        return true;
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)}/>
                    {TextValid1(firstName) ? "" : <p>First Name is Required and must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" onChange={e => setLastName(e.target.value)}/>
                    {TextValid1(lastName) ? "" : <p>Last Name is Required and must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                {TextValid2(email) ? "" : <p>Email is Required and must be at least 5 characters</p>}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    {TextValid3(password) ? "" : <p>Password is Required and must be at least 8 characters</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={e => setConfirmPassword(e.target.value)}/>
                    {TextValid3(confirmPassword) ? "" : <p>Password is Required and must be at least 8 characters</p>}
                </div>
                <input type="submit"  value="Submit"/>
            </form>
            {
            canRender ? <div>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {password}</h4>
                <h4>Confirm Password: {confirmPassword}</h4> 
            </div>
            : "" }
        </div>
    );
}

export default Form;