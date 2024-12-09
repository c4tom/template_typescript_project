import express from 'express';
import { Client } from 'pg';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// PostgreSQL client
const pgClient = new Client({
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'dev',
});

// MongoDB connection
const mongoUrl = 'mongodb://mongodb:mongodb@mongodb:27017';

// Hello World route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World!',
    routes: {
      '/': 'This message',
      '/db-test': 'Test database connections'
    }
  });
});

// Database test route
app.get('/db-test', async (req, res) => {
  const status = {
    postgres: 'Not connected',
    mongodb: 'Not connected'
  };

  try {
    // Test PostgreSQL
    try {
      const result = await pgClient.query('SELECT NOW()');
      status.postgres = `Connected - Server time: ${result.rows[0].now}`;
    } catch (error: any) {
      status.postgres = `Error: ${error.message}`;
    }

    // Test MongoDB
    try {
      const mongoStatus = mongoose.connection.readyState;
      status.mongodb = mongoStatus === 1 ? 'Connected' : 'Not connected';
    } catch (error: any) {
      status.mongodb = `Error: ${error.message}`;
    }

    res.json(status);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Initialize connections
async function initConnections() {
  try {
    // Connect to PostgreSQL
    await pgClient.connect();
    console.log('✅ PostgreSQL connected');

    // Connect to MongoDB
    await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connected');
  } catch (error: any) {
    console.error('❌ Database connection error:', error.message);
  }
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  → http://localhost:${PORT}/');
  console.log('  → http://localhost:${PORT}/db-test');
  initConnections();
});
