const newSection = document.createElement('section')
const newElement = document.createElement('button')
console.log('section', 'button')
newElement.innerHTML = 'button'

const body = document.querySelector('body')
body.append(newSection)
newSection.append(newElement)
newElement.addEventListener('click', () => {
const p = document.createElement('p')
p.textContent = 'Hello World'
newSection.append(p)
} )

