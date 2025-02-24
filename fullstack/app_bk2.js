
let express = require('express');
let app = express();
let port = 8000;
let productRouter = express.Router();
let categoryRouter = express.Router();


app.get('/',(req,res) => {
res.send ('Home page');
});

productRouter.route('/').get((req,res) => {
    res.send('product page');
});

productRouter.route('/details').get((req,res) => {
    res.send('product details page');
});

categoryRouter.route('/').get((req,res) => {
    res.send('product category page');
 });

categoryRouter.route('/details').get((req,res) => {
    res.send('category details page');
});



app.use('/product',productRouter);
app.use('/category',categoryRouter);
app.listen(port,(err) => {
    if(err) throw err;
    console.log('server is running on port 8000');
});