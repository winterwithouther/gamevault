const gamesContainer = document.createElement('div')
gamesContainer.className = 'games-container'

async function renderGames() {
    const response = await fetch('/games');
    if (!response.ok) throw new Error('Network response was not ok.')

        const games = await response.json()

        games.forEach(game => {

        })
}