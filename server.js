const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://koshiyaishika:Ishika%401101@cluster0.eaa0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/employees', employeeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
