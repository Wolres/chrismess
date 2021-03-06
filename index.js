    class App {
        constructor() {
        this.flicks=[]
        this.list = document.querySelector('#flicks')

        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }

    renderProperty (name, value) {
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value
        return span
    }
    
    renderItem (flick) {
        const item = document.createElement('li')
        item.classList.add('flick')
    
        // get the list of properties
        const properties = Object.keys(flick)
        
        // loop over properties
        properties.forEach((propertyName) => {
            //build and append a span
            const span = this.renderProperty(propertyName, flick[propertyName])
            item.appendChild(span)
        })

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Remove'
        deleteButton.addEventListener('click', (_ev) => this.removeFlick(flick, item))
        item.appendChild(deleteButton)
    
        return item
    }

    removeFlick(flick) {
        const item = ev.target.closest('.flick')
        this.list.removeChild(item)

        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
    }

    handleSubmit (ev) {
        const f = ev.target
    
        const flick = {
            name: f.flickName.value,
            chris: f.chrisName.value,
        }

        this.flicks.push(flick)
    
        const item = this.renderItem(flick)
    
        this.list.appendChild(item)
      
        f.reset()
        f.flickName.focus()
      }
    }

const app = new App()