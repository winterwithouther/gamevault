const gamesContainer = document.createElement('div')
gamesContainer.className = 'games-container'

async function renderPage() {
    const path = window.location.pathname

    // render all games
    if (path === '/') {
        renderGames()
        return
    }

    // render single game route
    if (path.startsWith('/games/')) {
        const slug = path.split('/games/')[1]
        renderSingleGame(slug)
        return
    }

    app.textContent = 'Page not found'
}

async function renderGames() {
    const response = await fetch('http://localhost:3000/api/games');
    if (!response.ok) throw new Error('Network response was not ok.')

    const games = await response.json()

    games.forEach(game => {
        const card = document.createElement('div')
        card.className = 'game-card'

        const title = document.createElement('h2')
        title.textContent = game.title
        card.appendChild(title)

        // Genre + Release
        const info = document.createElement('p')
        info.textContent = `${game.genre} | Released: ${game.release}`
        card.appendChild(info)

        const dev = document.createElement('p');
        dev.textContent = `Developer: ${game.developer}`;
        card.appendChild(dev);

        // Description
        const desc = document.createElement('p');
        desc.textContent = game.description;
        card.appendChild(desc);

        // Detail link using slug
        const link = document.createElement('a');
        link.href = `/games/${game.slug}`;
        link.textContent = 'View Details';
        card.appendChild(link);

        gamesContainer.appendChild(card);
    })
}

async function renderSingleGame(slug) {
    const response = await fetch(`http://localhost:3000/api/games/${slug}`)

    if (!response.ok) {
        app.textContent = 'Game not found'
        return
    }

    const game = await response.json()

    console.log(game)

    const container = document.createElement('div')
    container.className = 'single-game-container'

    const title = document.createElement('h1')
    title.textContent = game.title

    const info = document.createElement('p')
    info.textContent = `${game.genre} | Released: ${game.release}`

    const dev = document.createElement('p')
    dev.textContent = `Developer: ${game.developer}`

    const desc = document.createElement('p')
    desc.textContent = game.description

    container.append(title, info, dev, desc)
    document.getElementById('app').append(container)
}

document.getElementById('app').append(gamesContainer)

renderPage()