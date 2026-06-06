# AI Video Generator

This project is a full-stack MVP (Minimum Viable Product) for an AI Video Generator platform similar to HeyGen or Synthesia. It includes a dashboard for users to select avatars, write scripts, and generate videos, along with an asynchronous video generation backend pipeline.

## Tech Stack
### Frontend
- **React.js** (with **Tailwind CSS**): Provides a modern, sleek dashboard with responsive UI components.

### Backend
- **Node.js** with **Express**: Hosts the REST API.
- **SQLite/lowdb**: Provides lightweight, local database persistence for tracking video generation statuses.

---

## Features
1. **Dashboard UI (Frontend):**
   - Avatar Selector: Browse and select avatars.
   - Script Input: Provide or edit text for avatar speeches.
   - Voice/Language Dropdown: Select voice style and language.
   - Multi-Step Loading Bar: Shows real-time progress for video generation stages.
   - Video Library: Displays previously generated videos with status and download functionality.

2. **Backend (Node.js):**
   - Video generation API (`POST /api/videos/generate`).
   - Background worker queue for simulated video rendering.
   - Fetch or mock stock videos as final outputs.

3. **Video Output:**
   - Custom video player with playback and download functionality.

---

## Project Structure
```
ai-video-generator/
├── backend/
│   ├── index.js                 # Main server entry point
│   ├── routes/
│   │   ├── videoRoutes.js       # Routes handling video generation API
│   ├── controllers/
│   │   ├── videoController.js   # Main logic for video generation pipeline
│   ├── helpers/
│   │   ├── queue.js             # Simple worker queue implementation
│   │   ├── database.js          # SQLite/lowdb database helper
│   ├── data/
│   │   ├── avatars.json         # Default avatars and metadata
│   ├── db.sqlite                # SQLite file (if using SQLite)
│   └── config/
│       ├── pexelsApiConfig.js   # Example Pexels video API config
│
├── frontend/
│   ├── public/                  # Public static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx    # Main dashboard
│   │   │   ├── AvatarGrid.jsx   # Avatar selection grid
│   │   │   ├── VideoPlayer.jsx  # Custom video player
│   │   │   ├── LoadingBar.jsx   # Multi-step loading bar
│   │   │   └── Sidebar.jsx      # Sidebar Navigation (if needed)
│   │   ├── App.jsx              # React entry point
│   │   ├── index.css            # Tailwind CSS styles
│   │   ├── main.jsx             # ReactDOM rendering
│   └── package.json             # Frontend package dependencies
│
├── README.md                    # Project documentation
└── package.json                 # Root dependencies (Yarn/PNPM/Node version)
```

---

## Steps to Run the Project
### Backend Setup
1. Navigate to the `backend/` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   node index.js
   ```

### Frontend Setup
1. Navigate to the `frontend/` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
4. Open the browser at `http://localhost:5173`.

---

### Future Improvements
- Integrate real video rendering AI pipelines (e.g., Deep Learning models).
- Deploy video processing to cloud-based GPUs (AWS, Google Cloud, etc.).
- Add authentication for user-specific video libraries.

---

Happy Coding!