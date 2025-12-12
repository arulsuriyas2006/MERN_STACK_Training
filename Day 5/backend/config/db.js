const mongoose =require('mongoose')

const connection = async()=>{
    try{
    await  mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully")
    }catch(err){
        console.log("Error in database connection",err)
    }
}

module.exports = connection;