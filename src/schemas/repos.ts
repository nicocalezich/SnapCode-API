import mongoose, { Schema } from "mongoose"


const reposModel = mongoose.model('Repos', new Schema(
    { title: String, score: Number, code: String, tags: [String] }
));

export default reposModel

