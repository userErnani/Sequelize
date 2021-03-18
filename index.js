

const express = require('express')
      app = express()
      PORT = 3333
      bodyParser = require('body-parser')
      methodOverride = require('method-override')
      postgres = require('./conection/Postgres')
      usandoRotas = require('./rotas/usandoRotas')



app.use(methodOverride('_method'))
       
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', express.json(), usandoRotas)

 



app.listen(PORT, ()=> {
    console.log(`Trabalhando na porta ${PORT}`);
})


