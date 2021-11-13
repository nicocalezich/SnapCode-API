import express from "express";
import mongoose from "mongoose"

const app = express();
const port = 8080; // default port to listen

import reposRoute from './routes/repos'

app.use(express.json());
app.use('/repos', reposRoute);

// start the Express server
app.listen( port, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log( `server started at http://localhost:${ port }` );
    } catch (error) {
        throw new Error(error);

    }

} );