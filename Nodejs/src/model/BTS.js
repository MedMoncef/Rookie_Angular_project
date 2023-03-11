import mongoose from "mongoose";
const { Schema } = mongoose;

const BTSschema = new Schema({
    titrebts: String,
    niveau1:String,
    niveau2:String,
    niveau3:String,
    type: {
        type: String,
        enum: ['Informatique', 'art','Commerce',"Audiovisuel","Web"]
    }   
})

const BTS = mongoose.model("BTS", BTSschema);
export default BTS;