// btn onclick by fetch and then function

const Loadcomments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then( res => res.json())
    .then ( data => console.log(data))
    .catch(error => console.error('error happend' , error))
}


// btn onclick by async and await function

const Loadcomments2 = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data);

}


// btn onclick by async and await function

const Loadcomments2 = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.log('data load Error');
    }

}