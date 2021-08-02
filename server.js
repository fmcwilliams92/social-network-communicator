const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Use this to log mongo queries being executed!
mongoose.set('debug', true);
app.listen(PORT, () => console.log(`
  Connected on localhost:${PORT}`));

// not perfect, just an idea
// app.get('/api/users', (req, resp) => {
//   const ans = () => {
//     // get the users from the db
//     // models will come into play
//   };
//   resp.json(answer)
// });
