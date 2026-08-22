require('dotenv').config();

const { createContactApp } = require('./src/contactApp');

const app = createContactApp();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Contact API listening on port ${port}`);
});
