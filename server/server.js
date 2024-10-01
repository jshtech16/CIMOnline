const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const bodyParser = require("body-parser");
const uploadPath = "../public/assets/img/whitepaper";
const uploadForReviewPath = '../public/assets/img/review';
const port = 3001;

// Middlewarers
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Data"));

app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const paperRouter = require('./router/paperRouter');
const reviewRouter = require('./router/reviewRouter');

app.use(paperRouter);
app.use(reviewRouter);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Define the filename for uploaded files
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array('file', 2), (req, res, next) => {
  console.log('success')
  return res.status(200).send('Added paper successfully.')
});

const storageforreview = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadForReviewPath); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Define the filename for uploaded files
  },
});

const uploadForReview = multer({ storage: storageforreview });

app.post("/uploadLogo", uploadForReview.single('file'), (req, res, next) => {
  return res.status(200).send('Review has been added successfully.')
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});