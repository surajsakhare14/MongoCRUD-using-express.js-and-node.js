
const {MongoClient, Collection} = require("mongodb");
const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

async function getConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}

////////////////////////////////////////////
///
///getConnection
///Used to connect with MongoDBServer -> Database -> Collection
//
//////////////////////////////////////////////


//read the data
async function readData()
{
    let data = await getConnection();
    data = await data.find().toArray();
    console.log("Data Marvellous Database is : ");
    console.log(data);
}

//Delete the Data
async function DeleteData()
{
    let data = await getConnection();
    let result = await data.deleteOne({"Batch" : "PPA"});
    if(result.acknowledged)
    {
        console.log("Delete Operation perform Successfully...");
    }   
}

//Insert the Data
async function InsertData()
{
    let data = await getConnection();
    let result = await data.insertOne({"Batch" : "PPA", "Fees" : 18500});
    if(result.acknowledged)
    {
        console.log("Insert Operation perform Successfully...");
    }  
}

//Update the Data
async function UpdateData()
{
    let data = await getConnection();
    let result = await data.updateOne({"Batch" : "PPA"}, {$set : {"Fees" : 19500}});
    if(result.acknowledged)
    {
        console.log("Update Operation perform Successfully...");
    }  
}

function main()
{
    //DeleteData();
    //readData();
    //InsertData();
    //readData();
    UpdateData();
    readData();
    
}

//starter of the application
main();