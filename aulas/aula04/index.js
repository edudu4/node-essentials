const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://teste:teste@cluster0.y6ov1zl.mongodb.net/';

const connect = async () => {
    const mongoClient = await MongoClient.connect(url);
    const db = mongoClient.db('store');
    return db;
}

const insert = async (client) => {
    const db = await connect();
    const clientDoc = db.collection('client');
    clientDoc.insertOne(client);
}

const list = async () => {
    const db = await connect();
    const clientDoc = db.collection('clent');
    return clientDoc.find({}).toArray;
}

const update = async () => {
    const db = await connect();
    const clientDoc = db.collection('client');
    clientDoc.updateOne({_id: ''}, {$set: {nome:'Eduardo Alves'}});
}

const remove = async () => {
    const db = await connect();
    const clientDoc = db.collection('client');
    clientDoc.deleteOne({_id: ''});
}

insert({name: 'Eduardo', phone: '99999-9999'});