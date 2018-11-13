const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/api/test', (request, response) => {
    response.send({
        success: true,
        message: "API test working",
        something: "Random text"
    });
});

app.get('/api/user', (request, response) => {
    response.send({
        success: true,
        email: 'test@test.com',
        name: 'Jo Jo'
    })
});

app.post('/api/sign-in', (request, response) => {
    console.log('Data from client: ', request.body);

    response.send({
        success: true,
        postData: request.body,
        moreData: "Here is more data"
    });
});

app.get('*', (request, response) => {
    response.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});




