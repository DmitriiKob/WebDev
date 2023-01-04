import './style.scss'
interface Customers {
    id: number
    name: string
    surname: string
    general_info: string
    extra_info: string
}

let customers: Customers[] = [
    {
        id: 2,
        name: 'Ivan',
        surname: 'Ivanov',
        general_info: 'Developer',
        extra_info: 'Chineese'
    }
]

const render = (customers: Customers[]):void => {
    const table = document.querySelector('table tbody')
    customers.forEach(user => {
        const tr = document.createElement('tr')
        for (const key in user) {
            const td = document.createElement('td')
            // @ts-ignore
            td.innerHTML = user[key]
            tr.append(td)
        }
        table.append(tr)
    })
}

render(customers)
const handleAddCustomer = (event:SubmitEvent) => {
    event.preventDefault()
    let new_id:number = customers.length + 1
    const newCustomer = {}
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