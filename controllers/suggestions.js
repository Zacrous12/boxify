const Suggestion = require('../models/Suggestion')

module.exports = {
    getSuggestion: async (req,res)=>{
        console.log(req.user)
        try{
            const suggestionItems = await Suggestion.find({userId:req.user.id})
            const userName = await Suggestion.find({userId:req.user.id})
            const itemsLeft = await Suggestion.countDocuments({userId:req.user.id,completed: false})
            res.render('suggestions.ejs', {name: userName, suggestions: suggestionItems, left: suggestionsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createSuggestion: async (req, res)=>{
        try{
            await Suggestion.create({name: req.body.userName, suggestion: req.body.suggestionItem, completed: false, userId: req.user.id})
            console.log('Suggestion has been added!')
            res.redirect('/suggestions')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Suggestion.findOneAndUpdate({_id:req.body.suggestionIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Suggestion.findOneAndUpdate({_id:req.body.suggestionIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteSuggestion: async (req, res)=>{
        console.log(req.body.suggestionIdFromJSFile)
        try{
            await Suggestion.findOneAndDelete({_id:req.body.suggestionIdFromJSFile})
            console.log('Deleted Suggestion')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    