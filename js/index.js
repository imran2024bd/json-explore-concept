function loadUsers2(){
    // console.log(' execute fn');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => displayUsers2(data))
}

function displayUsers2(data) {
        const ul = document.getElementById('users-list');
    for ( const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = 'user';
        ul.appendChild(li);
        // console.log(user.address.geo.lng);
        // console.log(user.address.city);
        // console.log(user.email);
        // console.log(user.user);
        // console.log(user.id);

    }
}