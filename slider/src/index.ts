import "./style.scss"
const slideElemnts = document.querySelectorAll('.slides>div')
const leftElement = document.getElementsByClassName('left')[0]
const rightElement = document.getElementsByClassName('right')[0]
interface Slide {
    content:string
}
const slides:Slide[] = [
    {
        content: '1'
    },
    {
        content: '2'
    },
    {
        content: '3'
    },
    {
        content: '4'
    },
    {
        content: '5'
    },
    {
        content: '6'
    },
    {
        content: '7'
    },
    {
        content: '8'
    },
    {
        content: '9'
    }, 
    {
        content: '10'
    },
    
]
let position = 0
const count = 5

const animationRight = () =>{
    const desktopElement = document.querySelector('.slides>div:last-child')
    const lastElement = desktopElement.cloneNode() as HTMLElement
    lastElement.classList.add('last-element')
    document.querySelector('.slides').append(lastElement)
    setTimeout(()=>{
        lastElement.remove()
    }, 1000)
}
const animationLeft = () =>{
    
}
const handleRight = () =>{
    if(position == slides.length - count){
        position = 1 - count
    } else{
        position++
    }
    animationRight()
    render()
}
const handleLeft = () =>{
    if(position == 1 - count){
        position = count
    } 
    position--
    render()
}

const render = () => {
    const visibleSlides:Slide[] = []
    for(let i = position; i < position + count; i++ ){
        visibleSlides.push(slides.at(i))
    }
    visibleSlides.forEach((slide, index) => {
        [...slideElemnts].at(index).innerHTML = slide.content
    });
}
render()

leftElement.addEventListener('click', handleLeft)
rightElement.addEventListener('click',handleRight)

