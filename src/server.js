const express = require('express')
const server = express()
const handlebars = require('express-handlebars')

server.use(express.static("public"))
server.use(express.static(__dirname + '/public'));

server.engine('handlebars', handlebars({defaultLayout: 'main'}))
server.set('view engine', 'handlebars')

server.use(express.static("src"))
server.use(express.static(__dirname + '/src'));
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  return res.sendFile(__dirname + '/views/index.html')
})
server.get('/cadastro', (req, res) => {
  return res.sendFile(__dirname + '/views/cadastro.html')
})
server.get('/login', (req, res) => {
  return res.sendFile(__dirname + '/views/login.html')
})

server.get('/main', (req, res) =>{
  return res.sendFile(__dirname + '/views/main.html')
})

server.get('/profile', (req,res) => {
  return res.sendFile(__dirname + '/views/perfil.html')
})
server.listen(3003)