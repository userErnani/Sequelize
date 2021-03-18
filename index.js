
const { User } = require('./app/models');

const express = require('express')
      app = express()
      PORT = 3333
      bodyParser = require('body-parser')
      methodOverride = require('method-override')


User.create({ name: 'Eri derewrwerresfNois',
              email: 'ernafdsfsddsaasddsnia@rocketst.com.br',
              password: '123456',
              endereco: 'Rua dos Marrecos, 30'
            })     
 
app.use(methodOverride('_method'))
       
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.get('/', (req, res) =>{
  res.send('Hellooooooo !!!!!!!!!!!!!!!')
})


app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(PORT, ()=> {
    console.log(`Trabalhando na porta ${PORT}`);
})


