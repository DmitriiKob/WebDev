const divs = document.querySelectorAll('div')
const divHight = divs[1].offsetHeight
divs[1].style.width = 2 * divs[1].offsetHeight + 'px'
divs[0].style.height = divs[0].scrollHeight + 'px'
divs[0].addEventListener('click', ()=>{
    const top = divs[3].offsetTop
    console.log(top)
    window.scrollTo(0, top)
})