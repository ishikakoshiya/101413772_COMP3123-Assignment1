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

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update employee by ID
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const employee = await Employee.findByIdAndUpdate(id, updates, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee updated successfully.', employee });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

