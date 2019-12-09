const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./server/config/keys");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: ".", dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(
    "/images",
    express.static(path.join(__dirname, "images"), {
      maxAge: dev ? "0" : "365d"
    })
  );

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
