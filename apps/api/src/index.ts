import express from 'express';

const app = express();
const PORT = 3002;

// все запросы на /api/* должны перенаправляться на http://localhost:3001

app.listen(PORT, () => {
  console.log(`API запущен на http://localhost:${PORT}`);
});
