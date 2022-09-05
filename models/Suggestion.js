const mongoose = require('mongoose')

const SuggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
  cabinetNumber: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Suggestion', SuggestionSchema)
