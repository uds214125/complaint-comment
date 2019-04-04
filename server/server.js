'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Logger = console.log;

const port = 4125;

const app = express();

const Conn = require('./db_config');

const Complaints = require('./modules/complaints');
const Comments = require('./modules/comments');
const Auth = require('./modules/auth');

app.use(cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', (req, res)=>{
   res.send("Hello uds!");
})


// register & login  routes
app.post('/api/users/create', Auth.create)
app.post('/api/users/find', Auth.find)

// create Agent
app.post('/api/agent/create', Auth.createAgent)

// complaint routes
app.post('/api/complaints/create/:userId', Complaints.create)
app.get('/api/complaints/find/:userId', Complaints.find)

// comment routes
app.patch('/api/comments/update', Comments.update)


app.listen(port, () => {
    Conn().then(db=>{
        console.log(' db available ')
        app.locals.db = db;
        // db.collection("complaints").findOne({}, function(err, result) {
        //     if (err) throw err;
        //     console.log('Single Record : ', result);
        // });
        Logger(`Node.js app is listening at http://localhost:${port}`);
    }).catch(dbErr=>{
        console.log(' db err ', dbErr)
    })
    
});

