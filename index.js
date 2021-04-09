const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");
const jsonParser = express.json();
const app = express();

app.use(jsonParser);

app.use("/images", imageRouter);
app.use("/user", userRouter);

const port = 4000;

app.listen(port, console.log(`This is the port ${port}`));
