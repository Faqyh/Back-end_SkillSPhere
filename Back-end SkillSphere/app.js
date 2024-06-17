const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { trainings } = require('./data/trainings');
const { users } = require('./data/users');
const { organizers } = require('./data/organizers');

const app = express();

const port = 3000;

// Middleware untuk mengizinkan CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

// Endpoint to get all trainings
app.get('/trainings', (req, res) => {
  res.json(trainings);
});

// Endpoint to add a new training
app.post('/trainings', (req, res) => {
  const {
    nama_pelatihan,
    penyelenggara,
    durasi,
    kategori,
    deskripsi,
    persyaratan,
    fasilitas,
    pendaftaran,
    kontak,
    link_pendaftaran,
    sumber_informasi
  } = req.body;

  const newTraining = {
    id: uuidv4(),
    nama_pelatihan,
    penyelenggara,
    durasi,
    kategori,
    deskripsi,
    persyaratan,
    fasilitas,
    pendaftaran,
    kontak,
    link_pendaftaran,
    sumber_informasi
  };

  trainings.push(newTraining);
  res.status(201).json(newTraining);
});

// Endpoint to get a specific training by ID
app.get('/trainings/:id', (req, res) => {
  // res.json(req.params.id);
  const training = trainings.find(t => t.id === req.params.id);

  if (training) {
    res.json(training);
  } else {
    res.status(404).send('Training not found');
  }
});

// Endpoint to get all users
app.get('/organizers', (req, res) => {
  res.json(organizers);
});

// Endpoint to add a new user
app.post('/organizers', (req, res) => {
  const { username, password, email, pelatihan_id } = req.body;

  const newUser = {
    id: uuidv4(),
    username,
    password,
    email,
    pelatihan_id
  };

  organizers.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint to add a new user
app.post('/users', (req, res) => {
  const { username, password, email, favorit_pelatihan } = req.body;

  const newUser = {
    id: uuidv4(),
    username,
    password,
    email,
    favorit_pelatihan
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint to get a specific user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Endpoint to add a favorite training to a user
app.post('/users/:id/favorite', (req, res) => {
  const userId = req.params.id;
  const { trainingId } = req.body;

  const user = users.find(u => u.id === userId);
  const training = trainings.find(t => t.id === trainingId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  if (!training) {
    return res.status(404).send('Training not found');
  }

  if (!user.favorit_pelatihan.includes(trainingId)) {
    user.favorit_pelatihan.push(trainingId);
    res.status(200).json(user);
  } else {
    res.status(400).send('Training already in favorites');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});