
# 🎯 Video Progress Tracker — SDE Assignment

Hi! I'm Gopichand, and this is my submission for the SDE assignment. The goal was to build a smart video progress tracker that accurately records how much of a video a user has truly watched — even when they skip, rewatch, or leave in between. I built this from scratch with React, Node.js, Express, and MongoDB.

---

## 📦 Tech Stack

- **Frontend:** React.js + ReactPlayer
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **Tools:** Axios, useEffect/useState, custom interval logic

---

## ✅ Features Implemented

| Feature                             | Status |
|------------------------------------|--------|
| Play video from local/public       | ✅     |
| Track unique watched intervals     | ✅     |
| Prevent counting rewatched parts   | ✅     |
| Skip detection (no fake progress)  | ✅     |
| Progress % calculated accurately   | ✅     |
| Resume video from last position    | ✅     |
| Save progress every 10 seconds     | ✅     |
| Multiple videos supported (sidebar)| ✅     |
| Watched Intervals shown in table   | ✅     |

---

## 🧠 My Approach & Thought Process

### 1. **Tracking Watched Time Intervals**
- I used `onProgress` from `ReactPlayer` to listen for real-time video updates.
- Every second, I calculated `[start, end]` intervals.
- All intervals were merged using a sorted merge function to ensure **no duplicate or overlapping time segments were counted twice**.

### 2. **Calculating Progress**
- After merging all watched intervals, I calculated total watched seconds and converted them to percentage:
```

progress = (unique\_seconds\_watched / video\_duration) \* 100

````
- If a user rewatched the same segment (e.g., 0-10s again), that interval wasn't added again.

### 3. **Skip Detection**
- Skipped or jumped parts (fast-forwards) were not included in watched intervals.
- Only continuous playback counted towards real progress.

### 4. **Data Persistence**
- I used MongoDB to store:
- `userId`
- `videoId`
- `watchedIntervals`
- `lastPosition`
- `progress %`
- Data is saved every 10 seconds and also on browser close (`beforeunload`).

### 5. **Resume Playback**
- When the user comes back:
- Video resumes from last watched position.
- Progress and intervals are fetched and updated on frontend.
- The `ReactPlayer.seekTo()` function resumes the video.

---

## 🎨 User Interface / UX

- Clean layout with a sidebar for selecting videos.
- Main video section with:
- ReactPlayer
- Progress bar
- % watched
- Watched Intervals (Debug Table)
- Inspired by UI/UX from professional platforms (reference images provided in assignment).

---

## 🚀 How to Run the App Locally

### 🔧 1. Clone the Repository
```bash
git clone https://github.com/your-username/video-progress-tracker.git
cd video-progress-tracker
````

### 📦 2. Setup Backend

```bash
cd backend
npm install
touch .env
```

Paste your MongoDB URI into `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Then run:

```bash
node index.js
```

### 🌐 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:5000`

---

## 🔗 Project Folder Structure

```
video-progress-tracker/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VideoPlayer.jsx
│   │   │   └── VideoDashboard.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── lecture.mp4 (and other videos)
```

---

## 🧪 Testing

* Tested for:

  * Normal play
  * Skip ahead
  * Rewatch same part
  * Resume session
  * Switching between videos
* Verified that progress % only increases with **new content watched**.

---

## 🎁 Deliverables

* ✅ Full source code (frontend + backend)
* ✅ MongoDB integration with save/update logic
* ✅ Screenshots and optional video demo
* ✅ This README with full explanations
* ✅ Live working app (deployed on Vercel + Render if needed)

---

## 🧑‍💻 Author

Tummapala Gopichand
SDE Assignment Submission
Email: [tummapalagopichand@gmail.com](mailto:tummapalagopichand@gmail.com)

---

## ✅ Final Status: 100% Completed

Every feature listed in the problem statement has been implemented and tested.

```

---

### ✅ Next Step:
Push this as your `README.md` to your project’s GitHub root folder.

Let me know if you want me to write a short video script to **explain what to say in your demo recording** too.
```
