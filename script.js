text = document.getElementById('userinput')
view = document.getElementById('view')

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        if (text.value.startsWith('help')) {
            view.src = 'commands.txt'
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
        } else if (text.value.startsWith('to')) {
            view.src = text.value.slice(2)
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
        } else if (text.value.startsWith('say')) {
            const txt = text.value.slice(3)
            const utterance = new SpeechSynthesisUtterance(txt)
            utterance.pitch = .5
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
            window.speechSynthesis.speak(utterance)
        } else if (text.value.startsWith('to')) {
           view.src = text.value.slice(2)
           document.getElementById('view').style.display = 'block'
           document.getElementById('browser').style.display = 'none'
        } else if (text.value.startsWith('time')) {
            view.src = 'home.html'
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
        } else if (text.value.startsWith('ai')) {
            document.getElementById('view').style.display = 'none'
            document.getElementById('browser').style.display = 'block'
            document.getElementById('browser').style.height = '300px';
            document.getElementById('browser').src = 'https://www.perplexity.ai/search?q=' + text.value.slice(2)
        } else if (text.value.startsWith('time')) {
            view.src = 'home.html'
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
        } 
          else {
            view.src = 'unknown.html'
            document.getElementById('view').style.display = 'block'
            document.getElementById('browser').style.display = 'none'
        }
    }
})
 