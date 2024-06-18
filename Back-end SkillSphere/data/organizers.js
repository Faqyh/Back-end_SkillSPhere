const { v4: uuidv4 } = require("uuid");

let organizers = [
  {
    id: uuidv4(),
    username: "Belajar co.id",
    password: "pelatihan",
    email: "bigo@example.com",
    pelatihan_id: [],
  },
  {
    id: uuidv4(),
    username: "PT Dicoding",
    password: "123",
    email: "123@gmail.com",
    pelatihan_id: [],
  },
];

module.exports = { organizers };
