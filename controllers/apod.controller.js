const db = require("../models");

function selectedApod(req, res) {

    db.Apod.findOne()
    .then((apod) => res.json({apod})
    
    )
    .catch((error) => {
        console.log(error);
        res.status(500).send("An unexpected error has occurred")
    })
}

function createApod(req, res){
    const apod = req.body;
    db.Apod.create(apod).then(newApod => res.json(newApod)).catch(error => {
        console.log(error)
        res.status(400).send("unable to save Apod")
    })

}

function deleteApod (req,res){
   
    db.Apod.deleteMany({})
    .catch(error =>{
        console.log(error)
        res.status(400).send("Unable to delete apod")
    })
}

module.exports = {createApod, selectedApod, deleteApod}