const express = require("express");

const app = express();

const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/mydb?authSource=admin`;
const postRouter =require("./routes/postRoute")
const userRouter = require("./routes/userRoute")

//middleware defination 
app.use(express.json());


mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to db!')).catch((e)=>console.log(e));

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send('<h1>Hie Friend</h1>');
});

app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",userRouter)


app.listen(port, () => console.log(`listening on port ${port}`));
