const gamesContainer = document.createElement('div')
gamesContainer.className = 'games-container'

async function renderGames() {
    const response = await fetch('/games');
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

document.getElementById('app').append(gamesContainer)

renderGames()