const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const parametreRoute = require('./routes/routesParametre');
// const commentsRoute = require('./routes/comments');
// const imageRoute = require('./routes/images');
// const testRoutes = require('./routes/tests');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/uploads', express.static('uploads'));

// app.use("/posts", postsRoute);
app.use("/api", userRoute);
app.use("/api", parametreRoute);
// app.use("/comments", commentsRoute);
// app.use("/images", imageRoute);
// app.use("/test", testRoutes);

module.exports = app;
