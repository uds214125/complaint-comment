'use strict';

const Auth = {};
Auth.find =  async(req, res)=>{
    const db = req.app.locals.db;
    const { email, password } = req.body;
    const query = {email : email, password : password };
    
    await db.collection('Users').find(query).toArray(function(err, result) {
        if (err) throw err;
        else {
            console.log(' results : ', result );
            if(result.length > 0) {
                    // [ { _id: 5c361dd4f6f80226e7300d63,
                    //     email: 'xyz@gmail.com',
                    //     mobile: 8817772836,
                    //     password: '12345678',
                    //     type: 'C',
                    //     created_at: 1547050452662,
                    //     status: 1,
                    //     updated_at: '',
                    //     created_by: 'xyz@gmail.com' } ]
                    const userObj = {};
                        userObj.email = result[0].email;
                        userObj.id = result[0]._id;
                res.status(200).json(userObj);
            } 
            // else {
            //     const query = {email : email, password : password , type: 'A'};

            //      db.collection('Users').find(query).toArray(function(err, result) {
            //         if (err) throw err;
            //         else {
            //             const userObj = {};
            //                 userObj.email = result[0].email;
            //                 userObj.id = result[0]._id;
            //             db.collection('complaints').find({}).toArray(function(err, comp_result) {
            //                 if(err) throw err;
            //                 res.status(200).json({complaints: comp_result, result: userObj});
            //             })
            //         }
            //     });
            // }
        }
    });
}

Auth.create =  async(req, res)=>{
    const db = req.app.locals.db;
    const { email, mobile, password } = req.body;
    console.log(' : req. body : ', req.body)
    const data = {email: email, mobile: parseInt(mobile), password: password, type:'C',  created_at: new Date().getTime(), status: 1, updated_at: '', created_by: email };
    
    await db.collection('Users').insertOne(data,function(err, result) {
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

Auth.createAgent =  async(req, res)=>{
    const db = req.app.locals.db;
    const { email, mobile, password } = req.body;
    console.log(' : req. body : ', req.body)
    const data = {email: email, mobile: parseInt(mobile), password: password, type:'A',  created_at: new Date().getTime(), status: 1, updated_at: '', created_by: email };
    
    await db.collection('Users').insertOne(data,function(err, result) {
        if (err) throw err;
        else {
            console.log(' results saved : ', result.ops );
            if(result.ops.length) {

                res.status(200).send({code: 200, status: true});
            }
        }
    });
}
module.exports = Auth;