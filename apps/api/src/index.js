const express = require('express');

const app = express();
const PORT = 3002;

// TODO: настрой прокси
//       — все запросы на /api/* должны перенаправляться на http://localhost:3001

app.listen(PORT, () => {
  console.log(`API запущен на http://localhost:${PORT}`);
});
