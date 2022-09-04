const express = require('express')
const router = express.Router()
const suggestionsController = require('../controllers/suggestions') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, suggestionsController.getSuggestion)


router.post('/createSuggestion', suggestionsController.createSuggestion)

router.post('/sendRoomNumber', suggestionsController.sendRoomNumber)

router.put('/markComplete', suggestionsController.markComplete)

router.put('/markIncomplete', suggestionsController.markIncomplete)

router.delete('/deleteSuggestion', suggestionsController.deleteSuggestion)

module.exports = router