const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Check if request body is present
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  // Check if required fields are present
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }
  //Further validation can be added here
  console.log(user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));