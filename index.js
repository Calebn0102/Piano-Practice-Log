let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 5

function increment() {
    count += 5
    countEl.textContent = count
}

function save() {
    let countStr = count + " + "
    saveEl.textContent += countStr
    countEl.textContent = 5
    count = 5
}
