
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri =  'mongodb+srv://root:root@react-form-n1elq.mongodb.net/test?retryWrites=true'
//If checking locally..Put your local address here above in uri or can use this one "'mongodb://localhost:27017/simple-mern-passport' "
mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );
module.exports = mongoose.connection