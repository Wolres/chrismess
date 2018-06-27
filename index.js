const form = document.querySelector('form#flickForm')
const flickName = document.querySelector('#flickName')
const flickRel = document.querySelector('#flickRel')


const formToList = function(ev) {
    ev.preventDefault()
    const f = ev.target
    
    const list = document.querySelector('#flicks')
    addYear(list, flickName.value, flickRel.value)
    f.reset()
}

function addYear(list,x,y) {
    if (y) {
        list.innerHTML += `<li><span class="flickTitle">${x}</span>, <span class="flickYear">${y}</span></li>`
    } else {
        list.innerHTML += `<li><span class="flickTitle">${x}</span></li>`
    }
}

form.addEventListener('submit', formToList)
