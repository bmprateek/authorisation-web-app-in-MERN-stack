const mongoose = require("mongoose");
module.exports = () =>{
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,

    };
    try{
        mongoose.connect(process.env.DB , connectionParams);
        console.log("connection successful");
    }
    catch(error){
        console.log(error);
        console.log("connection error");
    }
}