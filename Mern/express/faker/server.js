
const express = require('express');
const app = express();

const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {faker} = require('@faker-js/faker');

///////////////////////??example/////////////////////////////////

// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);

const createUser = () => {
    const newUser = {
        password: faker.internet.password(10),
        email: faker.internet.exampleEmail(),
        phoneNumber: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.random.numeric(5),
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.random.numeric(7),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.stateAbbr(),
        zipcode: faker.random.numeric(5),
        country: "USA",

    };
    return newCompany;
}

// dummy db //
const users = [
    {password: "password", email: "me@email.com", phoneNumber: 1234567890, lastName: "Campos", firstName: "Angel", _id: 0}
]

const companies = [
    {_id: 0, name: "Example Co.", address: "123 state st, joliet, il, 60433, usa"}
]

///////////////////routes/////////////////////////
app.get("/", (req, res) => {
    res.json({message: faker.name.lastName()})
})

app.get("/api/users/new", (req, res) => {
    res.json({message: createUser()});
})
app.get("/api/companies/new", (req, res) => {
    res.json({message: createCompany()})
})
app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(), company: createCompany()});
})



// console.log("changing!")
app.listen(port, () => console.log(`running on port ${port}`))