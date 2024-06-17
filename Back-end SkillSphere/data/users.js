const { v4: uuidv4 } = require('uuid');

let users = [
    {
      id: uuidv4(),
      username: "admin",
      password: "admin",
      email: "john_doe@example.com",
      favorit_pelatihan: []
    }
  ];

module.exports = { users };