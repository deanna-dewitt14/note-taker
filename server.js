const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, function () {
  console.log(`App is listening on PORT: ${PORT}`);
});