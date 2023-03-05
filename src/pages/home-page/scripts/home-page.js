/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

const buttonEl = document.getElementById('proceed')

buttonEl.addEventListener('click', () => {
    console.log('first')
    buttonEl.innerHTML = '<img src="./images/loading.gif" alt="loading" id="loading">'
})
