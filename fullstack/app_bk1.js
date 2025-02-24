
let express = require('express');
let app = express();
let port = 8000;

app.get('/',(req,res) => {
res.send ('Home page');
});

app.get('/product', (req,res) => {
    res.send('product page');
});

app.get('/details', (req,res) => {
    res.send('product details page');
});

app.get('/category', (req,res) => {
    res.send('category page');

});

app.get('details', (req,res) => {
    res.send('category details page')
});

app.get('/category/details', (req,res) => {
    res.send('category details page')
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log('server is running on port 8000');
});