// const but = document.querySelector('.but')
// but.addEventListener('click', () => {
     
//     const p = document.createElement('p')
//     p.innerHTML = 'Hello World'
    
//   })

function change(element){
    const text = element.textContent
    let newText = ''
    for(let i = text.length - 1; i >= 0; i--){
        newText = newText + text[i]
    }
    element.textContent = newText
}

change(document.querySelector('.par'))
const but = document.querySelector('.but')
but.addEventListener('click', () => change(document.querySelector('.par')))

const input = document.querySelector('.str')
input.addEventListener('input', (event) => {
    const div = document.querySelector('.stringValue')
    console.log(event.target.value)
    div.textContent = event.target.value
})
const par = document.querySelector('.par')
const check = document.querySelector('#check')
check.addEventListener('change', (event) => {
    console.log(event.target.checked)
    if(event.target.checked){
        par.style.color = 'black'
    } else{
        par.style.color = 'white'
    }
    
} )

