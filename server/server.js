const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");

// Initialize Express server
const app = express();

let ipAddress = "8.8.8.8";

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get request for getting the current user's ip
app.get("/api/current-ip", (req, res) => {
  request(
    {
      url: "https://api.ipify.org?format=json",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: "error" });
      }

      res.json(JSON.parse(body));
    }
  );
});

// Update the current ip
app.post("/api/update-ip", function (req, res) {
  ipAddress = req.body.ipAddress;
  console.log(req.body);
  res.send(req.body);
});

// Get Ipify information based on the given ip
app.get("/api/info-ip", (req, res) => {
  request(
    {
      url: `https://geo.ipify.org/api/v2/country,city?apiKey=at_getFpFYVYEUE5xxQHWypYx8IAhzvg&ipAddress=${ipAddress}`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: "error" });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
