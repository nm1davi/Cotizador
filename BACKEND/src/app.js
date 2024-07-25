import express from 'express';
import path from 'path';

import { __dirname } from './utils.js';

const app = express();

console.log(`Servidor Corriendo`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../FRONTEND/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../FRONTEND/build', 'index.html'));
});

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

export default app;