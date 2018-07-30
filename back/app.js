
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

var app = express();
// var router = express.router();

// var router = require('./routes.js');
var router = express.Router();

// home
router.get('/', function (req, res) {
    res.send('Hello World! router ');

});
app.use('/', router);
// 1er affichage
// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});