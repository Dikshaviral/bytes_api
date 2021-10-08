var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getProducts() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Products");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = {
    getProducts:  getProducts
  }