const express = require("express"); const app = express(); app.use(express.static(".")); app.listen(3000, () => console.log("Portfolio http://localhost:3000 pe chalu hai"));
