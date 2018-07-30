// La variable express permet d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
var app = express();

// paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

//importation du fichier de route
var router = require('./routes.js');

// affichage selon la route
app.use('/', router);
app.use('/locations', router);


// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
