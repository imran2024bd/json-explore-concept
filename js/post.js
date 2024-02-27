function loadPosts(){
    // console.log('loading post data' );
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then (data => displayPosts(data))
}


/* 
1. get the container element where you want to add the new elements
2. creat child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts) {
    // console.log(posts);
    for( const post of posts){
        // console.log(post);
        const postContainer = document.getElementById('posts-container');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h4> User-${post.userId} </h4>
        <h5> Post: ${post.title} </h5>
        <p> Post Description: ${post.body} </p>     
        `;
        postContainer.appendChild(postDiv);
    }
}


loadPosts();