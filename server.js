// DEPENDENCIES
const express = require('express');
const app = express();
//REQUIRE
const planet = require('./models/planet');
const PORT=3000
//LISTEN
app.get('/', (req, res) => {
res.send('welcome, welcome!');
});
//MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
// REDIRECT
app.get('/', (req, res) => res.redirect('/planet'));
// INDEX ROUTE
app.get('/planet', (req, res) => {
res.render('index.ejs', {planet: planet}
    );
}); 
// NEW ROUTE
app.get('/planet/new', (req, res) => {
res.render('new.ejs');
});
//POST/CREATE ROUTE
app.post('/planet', (req, res) => {
    planet.push(req.body);
res.redirect('/planet');
    });
//SHOW ROUTE
app.get('/planet/:id', (req, res) => {
    res.render('show.ejs', ({planet: planet[req.params.id]}));
});
//LISTEN
app.listen(PORT, () =>{
console.log(`app is listening on port${PORT}`);
});