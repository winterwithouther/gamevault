const header = document.createElement('header')
header.className = 'header'

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const title = document.createElement('h1')
title.textContent = 'GameVault'
title.className = 'header-title'

headerContainer.append(title)

const aHome = document.createElement('a')
aHome.href = '/'
aHome.textContent = 'Home'

headerContainer.append(title)
headerContainer.append(aHome)
header.append(headerContainer)

const app = document.getElementById('app')
app.append(header)