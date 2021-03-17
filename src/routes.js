const express = require('express');
      routes = express()


routes.get('/', (req, res) => {res.send('Hello Word')})
//router.post('/insert_op', userController.insertOP)



 
module.exports = routes