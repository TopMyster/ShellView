text = document.getElementById('userinput')
view = document.getElementById('view')

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        if (text.value.includes('help')) {
            view.src = '/executions/commands.txt'
        } else if (text.value.includes('to')) {
            view.src = text.value.slice(2)
        } else {
            view.src = '/executions/unknown.html'
        }
    }
})