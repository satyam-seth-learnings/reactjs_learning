import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes 
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another Joke'
        },
        {
            id: 3,
            title: 'A third Joke',
            content: 'This is third Joke'
        },
        {
            id: 4,
            title: 'A fourth Joke',
            content: 'This is fourth Joke'
        },
        {
            id: 5,
            title: 'A fifth Joke',
            content: 'Thisis fifth Joke'
        }
    ];

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
