const Progress = require('../models/progressModel');

// ✅ Save or update progress
exports.saveProgress = async (req, res) => {
  const { userId, videoId, watchedIntervals, lastPosition, progress } = req.body;

  console.log('📥 Incoming Progress Data:', {
    userId,
    videoId,
    watchedIntervals,
    lastPosition,
    progress,
  });

  if (!userId || !videoId) {
    console.warn('⚠️ Missing userId or videoId');
    return res.status(400).json({ error: 'Missing userId or videoId' });
  }

  try {
    let existing = await Progress.findOne({ userId, videoId });
    console.log('🔎 Existing Progress Found:', !!existing);

    if (existing) {
      existing.watchedIntervals = watchedIntervals;
      existing.lastPosition = lastPosition;
      existing.progress = progress;
      await existing.save();
      console.log('✅ Progress updated in DB');
    } else {
      await Progress.create({ userId, videoId, watchedIntervals, lastPosition, progress });
      console.log('🆕 New progress record created in DB');
    }

    res.status(200).json({ message: 'Progress saved' });
  } catch (error) {
    console.error('❌ Save Error:', error.message);
    res.status(500).json({ error: 'Server error while saving progress' });
  }
};

// ✅ GET progress handler
exports.getProgress = async (req, res) => {
  const { userId, videoId } = req.params;

  try {
    const record = await Progress.findOne({ userId, videoId });
    if (!record) {
      return res.status(404).json({ message: 'No progress found' });
    }

    console.log('📤 Sending Progress Record:', record);
    res.status(200).json(record);
  } catch (error) {
    console.error('❌ Fetch Error:', error.message);
    res.status(500).json({ error: 'Server error while fetching progress' });
  }
};
