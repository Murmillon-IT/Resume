'use strict'

const openModalBtn = document.getElementById('openModalBtn')
const videoModal = document.getElementById('videoModal')
const closeModalBtn = document.getElementById('closeModalBtn')

openModalBtn.addEventListener('click', () => {
    videoModal.style.display = 'block'
})

closeModalBtn.addEventListener('click', () => {
    videoModal.style.display = 'none'
})

window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
    }
});
