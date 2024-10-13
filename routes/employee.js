const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

// Route to get all employees
router.get('/employees', employeeController.getAllEmployees);

// Route to create a new employee
router.post('/employees', createEmployee);

// Route to get an employee by ID
router.get('/employees/:eid', getEmployeeById);

// Route to update an employee by ID
router.put('/employees/:eid', updateEmployee);

// Route to delete an employee by ID
router.delete('/employees', deleteEmployee);

module.exports = router;
