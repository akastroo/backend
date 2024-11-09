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

// Função para criar um novo funcionário (POST)
const criarFuncionario = (req, res) => {
  const { name, position, salary } = req.body;

  if (!name || !position || !salary) {
    return res.status(400).json({ message: 'Nome, posição e salário são obrigatórios.' });
  }

  const employees = readDataFromFile().employees;

  // Gerando um novo ID único para o funcionário
  const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;

  const newEmployee = {
    id: newId,
    name,
    position,
    salary
  };

  // Adiciona o novo funcionário à lista
  employees.push(newEmployee);

  // Atualiza o arquivo db.json
  writeDataToFile({ employees });

  res.status(201).json(newEmployee);  // Retorna o novo funcionário criado
};

// Função para listar todos os funcionários (GET)
const listarUsuarios = (req, res) => {
  const employees = readDataFromFile().employees;
  res.json(employees);
};

// Função para obter um funcionário específico pelo ID
const obterFuncionarioPorId = (req, res) => {
  const { id } = req.params; 

  const employees = readDataFromFile().employees;

  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return res.status(404).json({ message: 'Funcionário não encontrado.' });
  }

  // Retorna o funcionário encontrado
  res.json(employee);
};

// Função para editar um funcionário existente (PUT)
const editarFuncionario = (req, res) => {
  const { id } = req.params;
  const { name, position, salary } = req.body;

  const employees = readDataFromFile().employees;
  const employeeIndex = employees.findIndex(emp => emp.id === parseInt(id));

  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Funcionário não encontrado.' });
  }

  // Atualiza os dados do funcionário
  employees[employeeIndex] = { id: parseInt(id), name, position, salary };

  // Atualiza o arquivo db.json
  writeDataToFile({ employees });

  res.json(employees[employeeIndex]);
};

// Função para deletar um funcionário (DELETE)
const deletarFuncionario = (req, res) => {
  const { id } = req.params;

  const employees = readDataFromFile().employees;
  const employeeIndex = employees.findIndex(emp => emp.id === parseInt(id));

  if (employeeIndex === -1) {
    return res.status(404).json({ message: 'Funcionário não encontrado.' });
  }

  // Remove o funcionário do array
  employees.splice(employeeIndex, 1);

  // Atualiza o arquivo db.json
  writeDataToFile({ employees });

  res.status(204).end();  // Retorna um status 204 sem corpo
};

module.exports = { criarFuncionario, listarUsuarios, editarFuncionario, deletarFuncionario, obterFuncionarioPorId };
