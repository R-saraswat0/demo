const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('TravoGenie Backend Server is running');
});

// Import routes
const destinationsRoutes = require('./routes/destinations');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/destinations', destinationsRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
