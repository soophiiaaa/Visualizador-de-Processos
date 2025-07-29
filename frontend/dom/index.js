const emptyMessage = document.querySelector(".empty-message")
const btnOpen = document.querySelector(".button-open")
const btnAdd = document.querySelector(".button-add")
const btnClose = document.querySelector(".button-close")
const modal = document.querySelector(".modal")
const list = document.getElementById("processes-list")

const inputServer = document.getElementById("server-name")
const inputNumber = document.getElementById("process-number")
const inputCreditDay = document.getElementById("credit-day")
const inputObs = document.getElementById("observations")

const STORAGE_KEY = "processes"
let processes = loadFromStorage()

renderProcesses()
toggleEmptyMessage()

btnOpen.onclick = () => {
    clearForm()
    modal.showModal()
}

btnClose.onclick = () => modalClose()

btnAdd.onclick = () => {
    const server = inputServer.value.trim()
    const number = inputNumber.value.trim()
    const creditDay = inputCreditDay.value
    const observations = inputObs.value.trim()

    if (!server || !number || !creditDay) {
        alert("Preencha os campos obrigatórios!")
        return
    }

    const newProcess = {
        id: cryptoRandomId(),
        server,
        number,
        creditDay,
        observations,
        createdAt: new Date().toISOString()
    }

    processes.push(newProcess)
    saveToStorage(processes)
    renderProcesses()
    toggleEmptyMessage()

    modalClose()
    clearForm()
}