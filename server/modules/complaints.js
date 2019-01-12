'use strict';

const Complaints = {};
Complaints.find =  async(req, res)=>{
    const db = req.app.locals.db;
    const { userId } = req.params;
    const query = {user_id: parseInt(userId), type: 'C'};

    await db.collection('Users').find(query).toArray(function(err, result) {
        if(result.length > 0) {
            db.collection('complaints').find(query).toArray(function(err, result) {
                if (err) throw err;
                else {
                    console.log(' results : ', result );
                    if(result.length> 0) { // customer
                        res.status(200).send(result);
                    }
                }
            })
        } else {
            db.collection('complaints').find({}).toArray(function(err, result) {
                if(err) throw err;
                res.status(200).send(result);
            })
        }         
    });
}
Complaints.create =  async(req, res)=>{
    const db = req.app.locals.db;
    const { userId } = req.params;
    const { content, heading } = req.body;
    console.log(req.params, ' : req. body : ', req.body)
    const data = {user_id: parseInt(userId), description: content, heading: heading, created_at: new Date().getTime(), status: 1, updated_at: '', created_by: parseInt(userId) };
    
    await db.collection('complaints').save(data,function(err, result) {
        if (err) throw err;
        else {
            console.log(' results saved : ', result.ops );
            if(result.ops.length) {

                res.status(200).send({code: 200, status: true});
            }
            req.on('end', ()=>{
                // db.close();
            })
        }
    });
}
module.exports = Complaints;