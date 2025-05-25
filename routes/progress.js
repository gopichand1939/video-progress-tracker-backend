const express = require('express');
const router = express.Router();
const { saveProgress, getProgress } = require('../controllers/progressController');

// Save progress: POST /api/progress/save
router.post('/save', saveProgress);

// Get progress: GET /api/progress/:userId/:videoId
router.get('/:userId/:videoId', getProgress);

module.exports = router;
