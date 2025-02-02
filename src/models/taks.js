const mongoose = require ("mongoose");

const userShema = new mongoose.Schema({
    
    responsable:String,
    status:String,
    fechaEntrega:Date, 
    actividad: String,
    comentarios : String
})
mongoose.models = {}
export default mongoose.model.Taks || mongoose.model('Taks', userShema);