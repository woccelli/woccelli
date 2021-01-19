const express = require('express');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

require('./routes/resumeRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    // Express will surve up production assets
    // like our mains.js file, or main.css
    app.use(express.static('client/build'))

    // Express will serve up the index html file
    // if it doesn't recognise the file
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
//Opportunity for the server provider to set the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);