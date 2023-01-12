import './style.scss'
interface Customers {
    id: number
    name: string
    surname: string
    general_info: string
    extra_info: string
}

type checkIt = number[]
let checkItItems: checkIt = []

let customers: Customers[] = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        general_info: 'Developer',
        extra_info: 'Chineese'
    }
]
const checkField = (event: any) => {
    const isChecked = event.target.checked
    console.log(event)
    if(isChecked){
        checkItItems.push(event.target.dataset.id)
    }else{
        checkItItems = checkItItems.filter(f => f !== event.target.dataset.id)
    }
    
    console.log(checkItItems)
}
const render = (customers: Customers[]):void => {
    const table = document.querySelector('table tbody')
    table.innerHTML = ''
    customers.forEach(user => {
        const tr = document.createElement('tr')
        for (const key in user) {
            const td = document.createElement('td')
            // @ts-ignore
            td.innerHTML = user[key]
            tr.append(td)
        }
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type' , 'checkbox')
        checkbox.setAttribute('data-id', String(user.id))
        checkbox.addEventListener('change', checkField)
        const td = document.createElement('td')
        td.append(checkbox)
        tr.append(td)
        table.append(tr)
    })
}
const renderEditFields = (customers: Customers[]):void => {
    const table = document.querySelector('table tbody')
    table.innerHTML = ''
    customers.forEach(user => {
        const tr = document.createElement('tr')
        for (const key in user) {
            const td = document.createElement('td')
            console.log(checkItItems, user.id)
            //@ts-ignore
            if(checkItItems.includes(String(user.id)) && key !== 'id'){
                const input = document.createElement('input')
                //@ts-ignore
                input.value = user[key]
                td.append(input)
            }else{
                 // @ts-ignore
                td.innerHTML = user[key]
            }
           
            tr.append(td)

        }
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type' , 'checkbox')
        checkbox.setAttribute('data-id', String(user.id))
        checkbox.addEventListener('change', checkField)
        const td = document.createElement('td')
        td.append(checkbox)
        tr.append(td)
        table.append(tr)
    })
}
render(customers)
const handleAddCustomer = (event:SubmitEvent) => {
    event.preventDefault()
    let new_id:number = customers.length + 1
    const newCustomer = {
        id: new_id
    }
    for (let i = 0; i < 4; i++) {
        //@ts-ignore
        newCustomer[event.target[i].name] = event.target[i].value
    }
    console.log(newCustomer)
    //@ts-ignore
    customers = [...customers, newCustomer]
    render(customers)
}
const form = document.getElementById('input_form')

form.addEventListener('submit', handleAddCustomer)

const sort = (field: 'id' | 'name' | 'surname' | 'general_info' | 'extra_info') => {
    console.log(field)
    customers.sort((a:Customers, b:Customers) =>{
        if(a[field] > b[field]){
            return -1
        }else if(a[field] < b[field]){
            return 1
        }else{
            return 0
        }
    })
    render(customers)
}

const thGroup = document.querySelectorAll('th')
//@ts-ignore
thGroup.forEach(th => th.addEventListener('click', (event) => sort(event.target.getAttribute("name"))))
const editButton = document.querySelector('#editButton')
const handleSaveEdit = (event:any) =>{
    event.target.innerHTML = 'Edit'
    editButton.removeEventListener('click', handleSaveEdit)
    editButton.addEventListener('click', handleEditRequest)
}
const handleEditRequest = (event:any) =>{
    renderEditFields(customers)
    event.target.innerHTML = 'ok'
    editButton.removeEventListener('click', handleEditRequest)
    editButton.addEventListener('click', handleSaveEdit)
}

editButton.addEventListener('click', handleEditRequest)
