const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://shanzalsid:<ac5MhX0sslvfJzbB>@cluster0.4gbmhgm.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for subscribers
const subscriberSchema = new mongoose.Schema({
  email: String,
});

// Create a model based on the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Serve static files (e.g., HTML and CSS)
app.use(express.static('public'));

// Define a route to handle the form submission
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Create a new subscriber document
  const newSubscriber = new Subscriber({
    email,
  });

  // Save the new subscriber to
