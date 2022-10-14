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
})

const sum = sumAlert(1,4)
alert(sum)

//sumLog(4,5)
// arrowSum(3,4)

newElement.addEventListener('click', () => alert(sumLog(4,5)))

function sumAlert(a, b){ // function declaration ...
  return a + b
}

const sumLog = function(a, b){ // function expression ...
  return a + b
}

const arrowSum = (a, b) => { // (arrow) function expression (empty context) ...
  alert(a + b)
}

const F = x => x * 2

const Fn = x => {
  const y = 5
  const z = y / x
  return x * z
}

alert(F(5))

// ƒ(n) => 2x