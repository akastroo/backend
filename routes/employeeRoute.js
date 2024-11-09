const express = require('express');
const router = express.Router();
const employeeController = require('../src/api/controllers/employeeController');

// Rota para listar todos os funcionários (GET)
router.get('/employee', employeeController.listarUsuarios);

router.get('/employee/:id', employeeController.obterFuncionarioPorId);

// Rota para criar um novo funcionário (POST)
router.post('/employee', employeeController.criarFuncionario);

// Rota para editar um funcionário (PUT)
router.put('/employee/:id', employeeController.editarFuncionario);

// Rota para deletar um funcionário (DELETE)
router.delete('/employee/:id', employeeController.deletarFuncionario);



module.exports = router;
