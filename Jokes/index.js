add()
function add() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('setup').value = data.setup;
            document.getElementById('punch').value = data.punchline;
        });
}