// Importando o módulo express para lidar com rotas e middlewares
//import tarefaRoutes from "./routes/tarefaRoutes"
require('dotenv').config();

//const mongoose = require('mongoose');
//const cors = require('cors');

const express = require('express');

// Inicializando a aplicação Express
const app = express();

// Importando as rotas da aplicação relacionadas às tarefas
//const tarefaRoutes = require('./routes/tarefaRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3001;
const employeeRoutes = require('./routes/employeeRoute');
// Configurando as rotas da aplicação para utilizar as rotas 
//relacionadas às tarefas
//app.use(cors());
//app.use('/api', tarefaRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Backend');
});

// Rota para logar


app.use(express.json());

// Configurando as rotas
app.use('/api', employeeRoutes);

//app.use('/produtos', employeeRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});


