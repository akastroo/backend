// Importando o módulo express para lidar com rotas e middlewares
//import tarefaRoutes from "./routes/tarefaRoutes"

const cors = require('cors');

const express = require('express');

// Inicializando a aplicação Express
const app = express();

// Importando as rotas da aplicação relacionadas às tarefas
//const tarefaRoutes = require('./routes/tarefaRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação para utilizar as rotas 
//relacionadas às tarefas
app.use(cors());
//app.use('/api', tarefaRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

