import express, { Request, Response } from 'express';

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Backend запущен на http://localhost:${PORT}`);
});
