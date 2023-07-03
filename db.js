const mongoose = require("mongoose")

module.exports = async function(){
    try {
        await mongoose.connect("mongodb+srv://akramovasadbek:Flatron1948@cluster0.hpbzr56.mongodb.net/resept-blud", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        })
        console.log('db runned')
    } catch (error) {
        console.log(error.message)
    }
}