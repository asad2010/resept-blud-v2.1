const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    image: {type: String, require: true},
    name: {type: String, require: true},
    type: {type: Array},
    whatYouNeed: {type: String, require: true},
    howToDo: {type: String, require: true},
})

const Resepts = mongoose.model('resepts', schema)

module.exports = Resepts;