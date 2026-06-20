# User Analytics Dashboard

A full-stack user analytics dashboard built for the CausalFunnel assignment.

## Features

* Session Analytics
* User Journey Visualization
* Click Heatmap
* MongoDB Event Storage
* REST APIs
* React Frontend
* Express Backend

## Tech Stack

### Frontend

* React
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## API Endpoints

### Track Events

POST /api/track

Stores user interaction events.

### Sessions Analytics

GET /api/sessions

Returns session summaries.

### User Journey

GET /api/sessions/:sessionId

Returns events for a specific session.

### Heatmap Data

GET /api/heatmap?url=<page_url>

Returns click coordinates for heatmap visualization.

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```text
project-root/
├── backend/
├── frontend/
└── README.md
```

## Assignment Objectives Completed

* Event Tracking
* Session Analytics
* User Journey Analysis
* Heatmap Visualization
* MongoDB Integration
* REST API Development
* Responsive Dashboard UI
