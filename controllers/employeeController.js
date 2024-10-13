const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createEmployee = async (req, res) => {
  const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;

  try {
    const employee = new Employee({ first_name, last_name, email, position, salary, date_of_joining, department });
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully.', employee_id: employee._id });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Other endpoints (update, delete, get by id) follow similar structure
