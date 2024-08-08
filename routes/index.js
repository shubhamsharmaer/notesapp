var express = require('express');
// const { path } = require('../app');


var router = express.Router();
const fs = require('fs');

// const alert = require('alert');
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(`./files`, (err, files) => {
    const filenames = files.map(file => file.split('.').slice(0, -1).join('.'));
    res.render("index", {files: filenames});    
  })
});

// Form Handling
router.post('/create', function(req, res, next) {
  fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt`, req.body.details, function(err){
      res.redirect('/');
  });
})

// file reading
router.get('/files/:filename', function(req, res) {
  fs.readFile(`./files/${req.params.filename}.txt`,"utf-8", function(err, filedata){
    if(err){
      console.error(err);
      res.status(500).send('An error occured');
      return;
    }
    res.render('show', {filename : req.params.filename, filedata : filedata});
  });
})

// edit handling
router.get('/edit/:filename', function(req, res) {
  res.render('edit', {filename : req.params.filename});
})

// edit form 
router.post('/edit', function(req, res) {
  fs.rename(`./files/${req.body.previous}.txt`, `./files/${req.body.new}.txt`, function(err){
    res.redirect('/');
    // console.log(req.body);
  });
})

// tring dynamic routes
router.get('/users/:id', function(req, res, next) {
  res.send("welcome " + req.params.id + " good to see you");
});

module.exports = router;
