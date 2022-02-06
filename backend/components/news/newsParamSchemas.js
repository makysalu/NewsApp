const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  archiveNews: {
    body: {
      id: String, 
    },
  },
  deleteNews: {
    params: {
      id: String, 
    },
  },
});

