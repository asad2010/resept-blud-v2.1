const Resepts = require('../model/model')
const controller = {
    getAll: async function(req,res){
        const data = await Resepts.find()
        res.render('index', {data})
    },
    sort: async function(req,res){
        const typeS = req.query.type;
        const data = await Resepts.find({type:typeS})
        res.render('index', { data });
    },
    search: async function(req,res){
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        let searchName = req.body.name;
        const p = await Resepts.find()
        const data = p.filter(el => el.name == capitalize(searchName) || el.type == capitalize(searchName));
        res.render('index', {data})
        
    },
    getTwo: async function(req,res){
        const data = await Resepts.findById(req.params.id)
        res.render('two', {data})
    },
}

module.exports = controller;