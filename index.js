const express = require('express');
const cors = require('cors');

const subjects = require("./data/subjects.json");
const courses = require("./data/courses.json");

const app = express();
const router = express.Router();

app.use(cors());
app.use('/', router);

const port = process.env.PORT || 5001;

router.route('/').get((req, res) => {
  res.send(subjects)
})

router.route('/courses/:categoryId').get((req, res) => {
  const categoryId = req.params.categoryId;

  if (categoryId === "6s5df5sdsm") {
    res.send(courses);
  } else {
    const coursesByCategory = courses.filter(crs => crs.subject_id === categoryId);
    res.send(coursesByCategory);
  }
})

router.route('/courses/:categoryId/:courseId').get((req, res) => {
  const courseId = req.params.courseId;
  const course = courses.find(crs => crs.id === courseId)
  res.send(course)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})