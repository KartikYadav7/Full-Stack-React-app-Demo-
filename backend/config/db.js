const mongoose=require('mongoose');

const connectdb = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('Connected to the database:');
    }
    catch(error){
        console.log('Failed to connect to the database');
        console.log('Error:',error.message);
        process.exit(1);

    }
}


module.exports=connectdb;