const mongoose = require('mongoose');

//define the mongodb connection url

//mongodb://localhost:27017/
const mongooseurl = "mongodb://127.0.0.1:27017/hotels"
mongoose.connect(mongooseurl,{
    // userNewUrlParser: true,
    // useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection

const db = mongoose.connection;

//Define event listeners for the database connection

db.on('connected',()=>{
    console.log('connected to MongoDB ')
});

db.on('error',(err)=>{
    console.log('MongoDb connection error: ',err)
})

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected')
});

//Export the database connection
module.exports = db;



















// mongosh
// use myDatabase;
// show collections;
// db.myCollection.find({ name: "John" });
// db.myCollection.insertOne({ name: "John", age: 30 });
// db.myCollection.updateOne({ name: "John" }, { $set: { age: 31 } });
// db.myCollection.deleteOne({ name: "John" });









// mongosh
// show databases
// use db
// db.users.insertOne({id:2, username:"Ali", age:15});
// db.users.find();
// 
// C:\Users\DELL>mongosh
// Current Mongosh Log ID: 664c39ae1628e64977cdcdf5
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6
// Using MongoDB:          7.0.9
// Using Mongosh:          2.2.6

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-05-21T10:55:23.741+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin    40.00 KiB
// config  108.00 KiB
// db       72.00 KiB
// local    72.00 KiB
// test> show databases;
// admin    40.00 KiB
// config  108.00 KiB
// db       72.00 KiB
// local    72.00 KiB
// test> use db;
// switched to db db
// db> show collections;
// users
// db> db.users.find();
// [
//   {
//     _id: ObjectId('664c384fe214f5b26acdcdf6'),
//     id: 1,
//     username: 'Alice',
//     age: 25
//   },
//   {
//     _id: ObjectId('664c3924e214f5b26acdcdf7'),
//     id: 2,
//     username: 'Ali',
//     age: 15
//   }
// ]
// update:
// db.users.updateOne({ username: "Ali" }, { $set: { age: 23 } });
// db.users.deleteOne{{id:2}};
// Uncaught:
// SyntaxError: Missing semicolon. (1:18)

// > 1 | db.users.deleteOne{{id:2}};
//     |                   ^
//   2 |

// db> db.users.deleteOne({id:2});
// { acknowledged: true, deletedCount: 1 }
// db> db.users.find();
// [
//   {
//     _id: ObjectId('664c384fe214f5b26acdcdf6'),
//     id: 1,
//     username: 'Alice',
//     age: 25
//   }
// ]
