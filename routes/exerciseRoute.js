const express = require('express');
const router = express.Router();
const exerciseController = require('../src/api/controllers/exerciseController');

// Rota para listar todos os funcionários (GET)
router.get('/exercise', exerciseController.listarTreinamentos);

router.get('/exercise/:id', exerciseController.obterTreinamentoPorId);

module.exports = router;
