const express = require('express');
const { getJobs, applyForJob, createJob, fetchJob } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get all jobs
router.get('/', getJobs);

// Route to get a job by ID
router.get('/getJobById/:id', fetchJob);

// Routes for applying and creating jobs
router.post('/jobseeker/apply', applyForJob);
router.post('/employeeseeker/create', authMiddleware, createJob);

module.exports = router;
