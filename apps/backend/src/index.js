const express = require('express');

const app = express();
const PORT = 3001;

// TODO: подключись к базе данных (./db/users.json)

// TODO: реализуй GET /users
//       — верни список пользователей из базы данных

app.listen(PORT, () => {
  console.log(`Backend запущен на http://localhost:${PORT}`);
});
