const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');
const app = express();

// The routes
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const auth = require('./routes/api/auth');
const flight = require('./routes/api/flights');
const contact = require('./routes/api/contacts');

connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.send('API Running'));
app.use(cors());
// define routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);
app.use('/api/auth', auth);
app.use('/api/flights', flight);
app.use('/api/contacts', contact);

if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));