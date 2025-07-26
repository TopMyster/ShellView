text = document.getElementById('userinput')
view = document.getElementById('view')

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        if (text.value.startsWith('help')) {
            view.src = 'commands.txt'
        } else if (text.value.startsWith('to')) {
            view.src = text.value.slice(2)
        } else if (text.value.startsWith('say')) {
            const txt = text.value.slice(3)
            const utterance = new SpeechSynthesisUtterance(txt)
            utterance.pitch = .5
            window.speechSynthesis.speak(utterance)
        } else if (text.value.startsWith('to')) {
           const target = text.value.slice(2).trim()
           const fullPath = path.resolve('/', target)
           view.src = 'file://' + fullPath
        } else if (text.value.startsWith('time')) {
            view.src = 'home.html'
        } else if (text.value.startsWith('ai')) {
            view.src = 'https://www.perplexity.ai/search?q=' + text.value.slice(2)
        } else if (text.value.startsWith('time')) {
            view.src = 'home.html'
        } 
          else {
            view.src = 'unknown.html'
        }
    }
})
 