const buttonOpen = document.getElementsByClassName("button-open")[0]
const buttonAdd = document.getElementsByClassName("button-add")[0]
const buttonClose = document.getElementsByClassName("button-close")[0]
const modal = document.getElementsByClassName("modal")[0]

buttonOpen.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}