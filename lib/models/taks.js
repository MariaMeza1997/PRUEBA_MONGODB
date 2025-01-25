const mongoose = require ("mongoose");

const userShema = new mongoose.Schema({
    responsable:String,
    status:String,
    fechaEntrega:Date, 
    actividad: String
})

export default mongoose.models.taks || mongoose.model("taks", userShema);