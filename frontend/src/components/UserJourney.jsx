import { useEffect, useState } from "react";
import axios from "axios";

function UserJourney({ selectedSession }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!selectedSession) return;

    axios
      .get(`http://localhost:5000/api/sessions/${selectedSession}`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, [selectedSession]);

  return (
    <div className="panel">
      <h2>User Journey</h2>

      <div className="panel-events">
        {!selectedSession ? (
          <p>Select a session</p>
        ) : (
          events.map((event, index) => (
            <div className="event-item" key={index}>
              <strong>{event.event_type}</strong>

              <p>
                {event.page_url ||
                  event.url ||
                  "No URL Available"}
              </p>

              <p>
                {new Date(event.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserJourney;