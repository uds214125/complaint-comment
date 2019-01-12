'use strict';


var MongoClient = require('mongodb').MongoClient;
const Logger = console.log;
let DB;
const url = "mongodb://localhost:27017/nossys";
const dbConn = async ()=>{

    return await new Promise((resolve, reject)=>{
        MongoClient.connect(url, { promiseLibrary: Promise, useNewUrlParser: true  }, async (err, db) => {
            if (err) {
                Logger(`Failed to connect. ${err.stack}`);
            }
            if(db.isConnected){
                Logger('DB connection success ');
                DB = await db.db('nossys');
                resolve(DB);
            } else {
                Logger('Could not connect.');
                reject();
            }
        });
    })
}
module.exports = dbConn;
