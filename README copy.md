# MovieMasterPro

[![Frontend: React + Vite](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Vite-61DAFB?logo=react&logoColor=white)](client/package.json)
[![Backend: Express](https://img.shields.io/badge/Backend-Express%205-000000?logo=express&logoColor=white)](server/package.json)
[![Database: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](server/config/db.js)
[![Auth: Firebase](https://img.shields.io/badge/Auth-Firebase%20Authentication-FFCA28?logo=firebase&logoColor=black)](client/src/firebase.init.js)
[![License: ISC](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

🚀 **[Live Demo](https://moviemaster-pro-111222.web.app/)**

MovieMasterPro is a full-stack movie discovery and personal collection platform. Browse, search, and filter movies, build a personal watchlist, and manage your own contributed titles — all backed by secure Firebase authentication and a MongoDB-powered REST API.

Keywords: movie platform, movie discovery, watchlist, movie collection, React SPA, Express API, Firebase auth, MongoDB, Tailwind CSS.

## Table of Contents
- [Live Demo](#live-demo)
- [Why MovieMasterPro](#why-moviemasterpro)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Quick Start (5 Minutes)](#quick-start-5-minutes)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication and Authorization](#authentication-and-authorization)
- [Deployment](#deployment)
- [Security Notes](#security-notes)
- [License](#license)

## Live Demo
🚀 Check out the live application: **[https://moviemaster-pro-111222.web.app/](https://moviemaster-pro-111222.web.app/)**

## Why MovieMasterPro
MovieMasterPro gives movie enthusiasts a single place to discover and track films:

- Visitors can browse the full movie catalogue, explore top-rated titles, and view detailed movie information.
- Authenticated users can add their own movies, maintain a personal watchlist, and manage contributed entries.
- Content is browsable by genre, sortable by rating, and searchable by title.

It is built as a modern full-stack JavaScript workspace with a React SPA frontend and an Express REST API backend.

## Features
- Firebase email/password authentication with protected routes
- Browse all movies with genre and rating range filters
- Full-text movie search by title
- Homepage sections: Hero, Statistics, Top Rated, Latest Movies, Genre Showcase, and About
- Movie details page with full cast, director, duration, language, and IMDB rating
- Personal watchlist — add and remove movies, persisted per user
- My Collection — view, update, and delete movies you have contributed
- Featured movies spotlight section
- Animated UI elements with AOS scroll animations
- Responsive design built with Tailwind CSS 4 and DaisyUI 5
- Toast notifications and SweetAlert2 confirmation dialogs
- Token-verified API calls — Firebase ID token injected automatically

## Screenshots

> Add screenshots to a `screenshots/` folder and update the paths below.

<p align="left">
  <img src="screenshots/home.png" width="40%">
  <img src="screenshots/all-movies.png" width="40%">
</p>

<p align="left">
  <img src="screenshots/movie-details.png" width="40%">
  <img src="screenshots/watchlist.png" width="40%">
</p>

<p align="left">
  <img src="screenshots/my-collection.png" width="40%">
  <img src="screenshots/add-movie.png" width="40%">
</p>

## Tech Stack
| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite 7, React Router 7 |
| UI and Styling | Tailwind CSS 4, DaisyUI 5, React Icons 5, AOS, Swiper |
| Notifications and UX | React Toastify 11, SweetAlert2 |
| Backend | Node.js, Express 5, CORS, Dotenv |
| Authentication | Firebase Authentication (client), Firebase Admin SDK token verification (server) |
| Database | MongoDB Atlas (`mongodb` driver v7) |
| Deployment | Firebase Hosting (client), Vercel serverless Node deployment (server) |
| Tooling | ESLint (flat config), Vite plugin ecosystem, Babel React Compiler |

## Architecture
MovieMasterPro follows a split frontend/backend workspace model:

- `client/` serves a component-driven SPA with route-level authentication guards.
- `server/` exposes REST endpoints with Firebase ID token verification middleware.
- MongoDB Atlas stores movies and per-user watchlist data.

Core data collections:
- `movies`
- `watchlist`

## Project Structure
```text
B12A10-moviemasterpro/
|-- client/
|   |-- public/
|   |   |-- covers/
|   |   `-- posters/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/          # Reusable UI components (Hero, Navbar, Footer, etc.)
|   |   |-- contexts/            # Auth context and provider
|   |   |-- layouts/             # RootLayout
|   |   |-- lib/                 # Utility helpers
|   |   |-- pages/               # Route-level pages
|   |   |-- routes/              # Router definition and ProtectedRoute guard
|   |   |-- firebase.init.js     # Firebase web SDK initialization
|   |   `-- main.jsx             # App bootstrap
|   |-- firebase.json            # Firebase Hosting config
|   `-- package.json
|-- server/
|   |-- config/
|   |   `-- db.js                # MongoDB client setup
|   |-- encode.js                # Base64 encoding utility for service account key
|   |-- index.js                 # API routes and server bootstrap
|   |-- serviceAccountKey.json   # Firebase Admin service account (never commit)
|   |-- vercel.json              # Vercel deployment routing
|   `-- package.json
`-- README.md
```

## Quick Start (5 Minutes)
### Prerequisites
- Node.js 18+
- npm 9+
- MongoDB Atlas project
- Firebase project with Authentication enabled (Email/Password provider)

### 1. Clone and Install
```bash
git clone https://github.com/abubakar-arman/B12A10-movie-master-pro-client.git
git clone https://github.com/abubakar-arman/B12A10-movie-master-pro-server.git

cd B12A10-movie-master-pro-client
npm install

cd ../B12A10-movie-master-pro-server
npm install
```

### 2. Configure Environment Variables
Create `server/.env` and `client/.env` using the examples in the next section.

### 3. Run Backend and Frontend
```bash
# terminal 1
cd server
node index.js
```

```bash
# terminal 2
cd client
npm run dev
```

Local app URLs:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## Environment Variables
### Server (`server/.env`)
```env
PORT=3000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
FIREBASE_SERVICE_ACCOUNT_KEY=base64_encoded_firebase_service_account_json
```

`FIREBASE_SERVICE_ACCOUNT_KEY` setup:
1. Go to Firebase Console → Project Settings → Service Accounts.
2. Click **Generate new private key** and download the JSON file.
3. Base64-encode the full JSON content:
   ```bash
   # Linux / macOS
   base64 -i serviceAccountKey.json

   # PowerShell (Windows)
   [Convert]::ToBase64String([IO.File]::ReadAllBytes("serviceAccountKey.json"))
   ```
4. Paste the encoded string as the value of `FIREBASE_SERVICE_ACCOUNT_KEY`.

### Client (`client/.env`)
```env
VITE_apiKey=your_firebase_web_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

## API Endpoints
Base URL (local): `http://localhost:3000`  
Base URL (production): `https://moviemaster-pro.vercel.app`

### Public Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Health/status message |
| GET | `/movies` | List all movies (supports `genres`, `minRating`, `maxRating` query params) |
| GET | `/movies/featured` | Get featured movies |
| GET | `/movies/:id` | Get movie by ID |
| GET | `/latest-movies` | Get the 5 most recently added movies |
| POST | `/search?searchKey=` | Search movies by title (case-insensitive) |

### Protected Endpoints
Requires `Authorization: Bearer <firebase_id_token>`.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/movies` | Add a new movie |
| PUT | `/movies/:id` | Update a movie by ID |
| DELETE | `/movies/:id` | Delete a movie by ID |
| GET | `/collection?email=` | Get all movies added by the authenticated user |
| GET | `/watchlist?email=` | Get the authenticated user's watchlist |
| POST | `/watchlist` | Add a movie to the watchlist |
| DELETE | `/watchlist` | Remove a movie from the watchlist |

## Authentication and Authorization
- Client side uses Firebase Authentication (Email/Password).
- Server side verifies Firebase ID tokens via the Firebase Admin SDK on every protected route.
- The `verifyToken` middleware decodes the token and attaches the verified email to the request; protected endpoints cross-check this email against the requested resource to prevent cross-user access.

## Deployment
### Frontend Deployment (Firebase Hosting)
```bash
cd client
npm run build
firebase deploy
```

### Backend Deployment (Vercel)
```bash
cd server
vercel
```

Required deployment environment variables:
- **Backend**: `PORT`, `DB_USER`, `DB_PASS`, `FIREBASE_SERVICE_ACCOUNT_KEY`
- **Frontend**: all `VITE_*` variables listed above

## Security Notes
- **Never commit** `serviceAccountKey.json` or any `.env` file. Add them to `.gitignore`.
- Use base64 encoding and environment secret managers (e.g., Vercel environment variables) for the Firebase service account key in production.
- Rotate credentials immediately if accidental exposure is suspected.
- The `verifyToken` middleware enforces that requested resources belong to the authenticated user.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

