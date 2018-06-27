const form = document.querySelector('form#flickForm')
const flickName = document.querySelector('#flickName')
const flickRel = document.querySelector('#flickRel')


//need to work out how to reset the cursor to the right field each time
//also work out how to only submit flick-date pairs
//answer is to have separate funcitons for separate fields, the first one you can't hit enter on but the second you can
//won't work, because both data fields' contents need to end up in the same list element
//if statement? if the second field is empty, don't do anything?
const formToList = function(ev) {
    ev.preventDefault()
    const f = ev.target
    
 //   const item = document.createElement('span')
 //   item.textContent = flickName.value

    const list = document.querySelector('#flicks')
    addYear(list, flickName.value, flickRel.value)
    //list.innerHTML += `<li><span class="flickTitle">${x}</span>, <span class="flickYear">${y}</span></li>`
    f.reset()
}

function addYear(list,x,y) {
    if (y) {
        list.innerHTML += `<li><span class="flickTitle">${x}</span>, <span class="flickYear">${y}</span></li>`
    } else {
        list.innerHTML += `<li><span class="flickTitle">${x}</span></li>`
    }
}

//var flickInfo = f.flickName.value
    
//if (f.flickRel.value) {
//      f.flickRel.value
//} 

form.addEventListener('submit', formToList)
