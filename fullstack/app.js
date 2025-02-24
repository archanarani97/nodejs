
let express = require('express');
let app = express();
let port = 8000;

let menu = [
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]

let products = require('./src/controller/productRoute')(menu);
let category = require('./src/controller/categoryRoute')(menu);

// static file path
app.use(express.static(__dirname +'/public'));
// ejs file path
app.set('views','./src/views');
// view engine
app.set('view engine','ejs');

app.get('/',(req,res) => {
// res.send ('Home page');
 res.render('index', {title: 'welcome Home Page'});
});


app.use('/products',products);
app.use('/category',category);

app.listen(port,(err) => {
    if(err) throw err;
    console.log('server is running on port 8000');
});