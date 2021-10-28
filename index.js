const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const handler = (req, res) => {
    res.send('Hello from node. Nodemon is working');
}
const users = [
    {
        id: 0,
        name: 'Elius Hossain',
        job: 'Web Dev'
    },
    {
        id: 1,
        name: 'Elius',
        job: 'Web Dev'
    },
    {
        id: 2,
        name: 'Himu',
        job: 'Web Dev'
    },
    {
        id: 3,
        name: 'Himel',
        job: 'Web Dev'
    }

]

// dynamic search result using query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(search)

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})
// app.Method

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Posting', req.body)
    res.json(newUser)
})


//Dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

// Live server
app.get('/', handler);
app.listen(port, () => {
    console.log('Listening to ', port)
});