const express = require('express');
const cors = require('cors');

const subjects = require("./data/subjects.json");

const app = express();
const router = express.Router();

app.use(cors())
app.use('/', router)

const port = process.env.PORT || 5001;

router.route('/').get((req, res) => {
  res.send(subjects)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})