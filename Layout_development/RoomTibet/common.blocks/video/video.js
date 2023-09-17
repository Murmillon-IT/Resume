'use strict'

const openModalBtn = document.querySelectorAll('.button-video') //кнопка события //todo делает окно видимым
const closeModalBtn = document.querySelector('.button-close') //кнопка события //todo делаем окно невидимым
const videoModal = document.querySelector('.video') //модуль окна видео //todo класс к которому добавляем модиф-р
const videoModalContent = document.querySelector('.video__content')
const videoPlayer = document.querySelectorAll('.video__el')
const tagBody = document.querySelector('body') //для фиксации при просмотре видео

const addModal = (element, modifier) => element.classList.add(modifier) //фун-я добавления модификатора
const removeModal = (element, modifier) => element.classList.remove(modifier) //фун-я удаления модиф-ра


const openModalBtnArr = (element, index) => {
    //Кнопка делает видимым окно и автоматически воспроизводит видео
    element.addEventListener('click', () => {
        addModal(videoModal, 'video_visible') //делаем окно видимым

        videoPlayer[index].play() //воспроизводим видео автом-ки
        videoPlayer[index].classList.add('video__el_visible')

        tagBody.style.overflow = 'hidden' //фиксируем фон при просмотре видео
    })
}

openModalBtn.forEach((element, index) => {
    openModalBtnArr(element, index)
})

//Кнопка делает невидимым окно и останавливает видео
closeModalBtn.addEventListener('click', () => {
    removeModal(videoModal, 'video_visible') //делаем окно невидимым
    tagBody.style.overflow = 'auto'

    videoPlayer.forEach(element => {
        element.pause()
        element.classList.remove('video__el_visible')
    })
})

//При клике вне видео окно становится невидимым и видео останавливается
window.addEventListener('click', event => {
    if (event.target === videoModalContent) {
        removeModal(videoModal, 'video_visible')
        tagBody.style.overflow = 'auto'

        videoPlayer.forEach(element => {
            element.pause()
            element.classList.remove('video__el_visible')
        })
    }
})