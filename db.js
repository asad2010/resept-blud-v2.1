const mongoose = require("mongoose")

module.exports = async function(){
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        })
        console.log('db runned')
    } catch (error) {
        console.log(error.message)
    }
}
