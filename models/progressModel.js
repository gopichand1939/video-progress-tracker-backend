const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  watchedIntervals: {
    type: [[Number]], // array of [start, end] pairs
    required: true,
    default: [],
  },
  lastPosition: {
    type: Number,
    required: true,
    default: 0,
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

// ✅ Correct export
const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
