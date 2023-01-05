const getUsers = () => {
    fetch('https://gorest.co.in/public/v2/users').then((data) => {
       data.json().then(users => {
        console.log(users)
        const ul =document.querySelector('ul')
        users.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = user.name + user.email
            ul.append(li)
        });
       })
    })
}
getUsers()


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://gorest.co.in/public/v2/posts", requestOptions)
    .then(response => response.json())
    .then(posts => {
        const ul =document.querySelector('ul')
        posts.forEach(post => {
            const li = document.createElement('li')
            li.innerHTML = post.title
            ul.append(li)
        });
    })
    .catch(error => console.log('error', error));

    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event)
        const form_data = {}
        for(let i = 0; i < 4; i++){
            if(event.target[i].type =="text" || event.target[i].type == 'email'){
                form_data[event.target[i].name] = event.target[i].value
            }
          
            if(event.target[i].checked){
                form_data[event.target[i].name] = event.target[i].value
            }
        }
        console.log(form_data)
    })