import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const MatchItemSchema = new Schema
({
    matchNumber: Number,
    competitor1Name: String,
    competitor2Name: String,
    winner: String
},
{
    collection: "match"
});

const Model = mongoose.model("Match", MatchItemSchema);
export default Model;