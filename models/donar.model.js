import mongoose from "mongoose";

const donarSchema=new mongoose.Schema({
     name:{type:String},
     age:{type:Number},
     dob:{type:String},
     place:{type:String},
     phone:{type:Number},
     blood_group:{type:String},
});

export default mongoose.model.Donars||mongoose.model("Donar",donarSchema);