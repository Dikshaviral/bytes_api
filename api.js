
var  Db = require('./dboperations');
var  Product = require('./product');
var  express = require('express');
var  bodyParser = require('bodyParser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});
 
 
router.route('/products').get((request, response) => {
  Db.getProducts().then((data) => {
    response.json(data[0]);
  })
})

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Product API is runnning at ' + port);