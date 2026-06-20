import { useEffect, useState } from "react";
import axios from "axios";

function SessionsList({ selectedSession, setSelectedSession }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="panel">
      <h2>Sessions</h2>

      {sessions.map((session) => (
        <div
          key={session.session_id}
          className="session-item"
          onClick={() => setSelectedSession(session.session_id)}
          style={{
            cursor: "pointer",
            border:
              selectedSession === session.session_id
                ? "2px solid #2563eb"
                : "none",
          }}
        >
          <strong>{session.session_id}</strong>

          <p>Total Events: {session.totalEvents}</p>
        </div>
      ))}
    </div>
  );
}

export default SessionsList;