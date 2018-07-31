var express = require('express');
var router = express.Router();
let locations = require('./locations.js')

// le verbe put crée une entité et il faut la recréer en entier pour la modifier
// le verbe post crée une entité et permet de n'en modifier qu'une partie

// home
router.get('/', function (req, res) {
    res.send( 'Hello World! router ' );
});

// API locations
router.get('/locations', function (req, res) {
    //ici on renvoie les locations présentes dans la base
    // locations.forEach( (element) => { 
    //     console.log(element.id);
    // })
    res.json(locations)
    //res.json( {loc1: "jon", loc2: "luis", loc3: "yves"} );
});

router.put('/locations', function (req, res) {
    // ici on ajoute une loc ds la base
    // et on confirme la bonne insertion
})

router.get('/locations/:id', function (req, res) {
    // ici on accède aux détails d'une loc
})

router.post('/locations/:id/update', function (req, res) {
    // ici on modifie les détails d'une loc
})

module.exports = router;