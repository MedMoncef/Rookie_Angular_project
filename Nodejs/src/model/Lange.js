import mongoose from "mongoose";
const { Schema } = mongoose;

const langeSchema = new Schema({
    niveau1:String,
    niveau2:String,
    niveau3:String,
    type: {
        type: String,
        enum: ['Allemand', 'Anglais','Francais','Russia']
    }   
})

const Lange = mongoose.model("Lange", langeSchema);
export default Lange;