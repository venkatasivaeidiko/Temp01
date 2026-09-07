const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from your custom Node.js Docker container! 🐳🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});