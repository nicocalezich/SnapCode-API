// import * as dotenv from 'dotenv'
// dotenv.config();




// const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


// const client = new mongoclient(uri);

// let instance = null;

// async function getConnection(){
//     if(instance == null){
//         try {
//             instance = await client.connect();
//         } catch (err) {
//             console.log(err.message);
//             throw new Error('problemas al conectarse con mongo');
//         }
//     }
//     return instance;
// }

// module.exports = { getConnection };