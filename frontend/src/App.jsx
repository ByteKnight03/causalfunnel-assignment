import { useEffect, useState } from "react";
import axios from "axios";
import SessionsList from "./components/SessionsList";
import UserJourney from "./components/UserJourney";
import Heatmap from "./components/Heatmap";
import "./App.css";

function App() {
  const [selectedSession, setSelectedSession] = useState("");
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalSessions = sessions.length;

  const totalEvents = sessions.reduce(
    (sum, session) => sum + session.totalEvents,
    0
  );

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>User Analytics Dashboard</h1>
        <p>Real-Time User Behaviour Tracking System</p>
      </header>

      {/* STATISTICS */}
      <div className="stats">
        <div className="card">
          <h3>Total Sessions</h3>
          <h2>{totalSessions}</h2>
        </div>

        <div className="card">
          <h3>Total Events</h3>
          <h2>{totalEvents}</h2>
        </div>

        <div className="card">
          <h3>Database Status</h3>
          <h2 style={{ color: "#16a34a" }}>Connected</h2>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <SessionsList
          selectedSession={selectedSession}
          setSelectedSession={setSelectedSession}
        />

        <UserJourney selectedSession={selectedSession} />
      </div>

      {/* HEATMAP */}
      <Heatmap />
    </div>
  );
}

export default App;