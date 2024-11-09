// Importando o módulo express para lidar com rotas e middlewares
//import tarefaRoutes from "./routes/tarefaRoutes"
require('dotenv').config();

const mongoose = require('mongoose');
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



// Configurando as rotas
app.use('/api', employeeRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
/*app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});*/

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@viceri.wn7yt.mongodb.net/?retryWrites=true&w=majority&appName=viceri`,
  )
  .then(() => {
    console.log('Conectou ao banco!');
    // Agora, inicie o servidor Express após a conexão com o MongoDB
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err))