const deleteBtn = document.querySelectorAll('.del')
const suggestionItem = document.querySelectorAll('span.not')
const suggestionComplete = document.querySelectorAll('span.completed')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteSuggestion)
})

Array.from(suggestionItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(suggestionComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteSuggestion(){
    const suggestionId = this.parentNode.dataset.id
    try{
        const response = await fetch('suggestion/deleteSuggestion', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'suggestionIdFromJSFile': suggestionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const suggestionId = this.parentNode.dataset.id
    try{
        const response = await fetch('suggestions/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'suggestionIdFromJSFile': suggestionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const suggestionId = this.parentNode.dataset.id
    try{
        const response = await fetch('suggestions/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'suggestionIdFromJSFile': suggestionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//Hide var input and show sugg input
// const enterVar = document.querySelector('#enterVar')//Hide var input and show sugg input
// const sendSugg = document.querySelector('#sendSugg')//Hide var input and show sugg input
// const enterVarButton = document.querySelector('#enterVarButton')//Hide var input and show sugg input

// enterVarButton.addEventListener('click', hideVarInput)
// function hideVarInput(){
//     if(sendSugg.classList.contains('hidden')){
//     sendSugg.classList.toggle('hidden')
//     enterVar.classList.add('hidden')
//     }
// }
