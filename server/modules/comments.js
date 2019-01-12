'use strict';
const ObjectID = require('mongodb').ObjectID;

const Comments = {};
Comments.find =  async(req, res)=>{
    const db = req.app.locals.db;
    const { userId } = req.params;
    const query = {user_id: parseInt(userId)};
    
    await db.collection('comments').find(query).toArray(function(err, result) {
        if (err) throw err;
        else {
            console.log(' results : ', result );
            res.status(200).send(result);
            req.on('end', ()=>{
                // db.close();
            })
        }
    });
}
// update existing comment
Comments.update =  async(req, res)=>{
    const db = req.app.locals.db;
    const { comment,  user_id, complaint_id: id } = req.body;

    const whereQuery = {"user_id": parseInt(user_id), "_id":  ObjectID(id)};
    const dataToBePatch = { $set: { comments: [{comment: comment, timestamp : new Date().getTime()}] } };

    await db.collection('complaints').updateOne(whereQuery, dataToBePatch, function(err, result) {
        if (err) throw err;
        else {
            console.log(' update results : ', result.result );
            res.status(200).send({code: 200, status: true});
            req.on('end', ()=>{
                // db.close();
            })
        }
    });
}
module.exports = Comments;