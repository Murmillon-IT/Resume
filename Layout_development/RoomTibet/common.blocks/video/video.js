'use strict'

//Параметры: (кнопка добав-ет мод-р, кнопка удаляет мод-р, к чему доб-ем/удалеям мод-р, модификатор, видеоплеер id из тега video, при клике на элемент удаляет мод-р)
const videoFunc = (openButtonClass, closeButtonClass, videoModalClass, modClass, videoPlayerId, videoModalContentClass) => {
    const openModalBtn = document.querySelectorAll(openButtonClass) //кнопка события //todo делает окно видимым
    const closeModalBtn = document.querySelector(closeButtonClass) //кнопка события //todo делаем окно невидимым
    const videoModal = document.querySelector(videoModalClass) //модуль окна видео //todo класс к которому добавляем модиф-р
    const videoPlayer = document.getElementById(videoPlayerId) //получение элемента по ID (видеоплеер)
    const videoModalContent = document.querySelector(videoModalContentClass)

    const removeVideoModal = () => videoModal.classList.remove(modClass) //модиф-р который удаляем от videoModal
    const addVideoModal = () => videoModal.classList.add(modClass) //модиф-р который добавляем к videoModal


    const openModalBtnArr = (element) => {
        //Кнопка делает видимым окно и автоматически воспроизводит видео
        element.addEventListener('click', () => {
            addVideoModal() //делаем окно видимым
            if (videoPlayer.tagName === "VIDEO") { //нужен только видеоплеер
                videoPlayer.play() //воспроизведение видео
            }
        })
    }

    openModalBtn.forEach(openModalBtnArr)

    //Кнопка делает невидимым окно и останавливает видео
    closeModalBtn.addEventListener('click', () => {
        removeVideoModal() //делаем окно невидимым
        if (videoPlayer.tagName === "VIDEO") {
            videoPlayer.pause() //остановка видео
        }
    })

    //При клике вне видео окно становится невидимым и видео останавливается
    window.addEventListener('click', event => {
        if (event.target === videoModalContent) {
            removeVideoModal()
            if (videoPlayer.tagName === "VIDEO") {
                videoPlayer.pause()
            }
        }
    })
}

videoFunc('.button-video', '.button-close', '.video', 'video_visible', 'videoPlayer', '.video__content')