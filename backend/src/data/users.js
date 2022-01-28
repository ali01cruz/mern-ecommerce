import hashPassword from '../common/hashPassword.js';


const users = [
    {
        name : 'Admin user',
        email : 'admin@example.com',
        password : hashPassword('123456'),
        isAdmin : true
    },
    {
        name : 'Jhon Doe',
        email : 'jhon@example.com',
        password : hashPassword('123456'),
        isAdmin : true
    },
    {
        name : 'Jane Doe',
        email : 'jane@example.com',
        password : hashPassword('123456'),
        isAdmin : true
    },
    

]

export default users;