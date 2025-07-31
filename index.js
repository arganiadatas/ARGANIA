const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tweets = [
  { id: 1, user: "juanito", content: "¡Hola Twitter!", likes: 0 },
  { id: 2, user: "maria", content: "Mi primer tweet", likes: 0 }
];

app.get('/tweets', (req, res) => {
  res.json(tweets);
});

app.post('/tweets', (req, res) => {
  const { user, content } = req.body;
  const newTweet = {
    id: tweets.length + 1,
    user,
    content,
    likes: 0
  };
  tweets = [newTweet, ...tweets];
  res.json(newTweet);
});

app.post('/tweets/:id/like', (req, res) => {
  const id = parseInt(req.params.id);
  tweets = tweets.map(t => t.id === id ? { ...t, likes: t.likes + 1 } : t);
  res.json({ success: true });
});

app.listen(4000, () => console.log('API corriendo en http://localhost:4000'));
