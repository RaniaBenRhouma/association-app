const express = require('express');
const dbConnect = require('./config/dbConnect');
const UserRouter = require('./Routes/userRte');
const EventsRouter = require('./Routes/eventsRte');
const ForumRouter = require('./Routes/forumRte');



const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
// connect to db
dbConnect();

app.use('/user', UserRouter);
app.use('/events', EventsRouter);
app.use('/forum', ForumRouter);



app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);

