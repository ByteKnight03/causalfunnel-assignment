import { useEffect, useState } from "react";
import axios from "axios";

function Heatmap() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/heatmap?url=http://localhost")
      .then((res) => setClicks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="heatmap-panel">
      <h2>Heatmap View</h2>

      <div className="heatmap-box">
        {clicks.map((click, index) => (
          <div
            key={index}
            className="dot"
            style={{
              left: `${Math.min((click.x / 800) * 100, 95)}%`,
              top: `${Math.min((click.y / 600) * 100, 95)}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Heatmap;