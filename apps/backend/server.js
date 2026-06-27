import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "AstraControl API",
    status: "Running"
  });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    missions: 14,
    completed: 36,
    alerts: 3,
    units: [
      {
        id: "MS-101",
        location: "Delhi",
        status: "Active"
      },
      {
        id: "MS-102",
        location: "Mumbai",
        status: "Monitoring"
      },
      {
        id: "MS-103",
        location: "Chennai",
        status: "Completed"
      },
      {
        id: "MS-104",
        location: "Bengaluru",
        status: "Active"
      }
    ]
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 AstraControl Backend running on http://localhost:${PORT}`);
});