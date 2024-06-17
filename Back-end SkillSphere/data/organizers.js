const { v4: uuidv4 } = require("uuid");

let organizers = [
  {
    id: uuidv4(),
    username: "pelatihan",
    password: "pelatihan",
    email: "bigo@example.com",
    pelatihan_id: [],
  },
  {
    id: uuidv4(),
    username: "pelatihan2",
    password: "pelatihan2",
    email: "bigo@example.com",
    pelatihan_id: [],
  },
];

module.exports = { organizers };
