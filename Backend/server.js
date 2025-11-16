const express = require("express");
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

//Routes
// const DetailRouter = require('./Routers/DetailRouter');
// app.use("/api", DetailRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
