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
        li.innerText = user.name;
        ul.appendChild(li);
        // console.log(user.address.geo.lng);
        // console.log(user.address.city);
        // console.log(user.email);
        // console.log(user.user);
        // console.log(user.id);

    }
}

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


function createApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
