const fs = require('fs');
const path = require('path');

// Caminho do arquivo db.json
const dbPath = path.join(__dirname, '../../../db.json');

// Função para ler o arquivo db.json
const readDataFromFile = () => {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);  // Retorna os dados como um objeto JS
};

// Função para escrever os dados atualizados no db.json
const writeDataToFile = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};


// Função para listar todos os funcionários (GET)
const listarTreinamentos = (req, res) => {
  const exercises = readDataFromFile().exercises;
  res.json(exercises);
};

// Função para obter um funcionário específico pelo ID
const obterTreinamentoPorId = (req, res) => {
  const { id } = req.params; 

  const exercises = readDataFromFile().exercises;

  const exercise = exercises.find(emp => emp.id === parseInt(id));

  if (!exercise) {
    return res.status(404).json({ message: 'Treinamento não encontrado.' });
  }

  // Retorna o funcionário encontrado
  res.json(exercise);
};

module.exports = {listarTreinamentos, obterTreinamentoPorId };
