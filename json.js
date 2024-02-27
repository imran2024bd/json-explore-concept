const user = { id: 1 , name: 'Gorib Aamir' , job: 'actor'};

// Javascript Object Notation ( JSON )
const stringified = JSON.stringify(user);
// console.log(user);
// { id: 1, name: 'Gorib Aamir', job: 'actor' }
// console.log(stringified);
// {"id":1,"name":"Gorib Aamir","job":"actor"}


// task -02 
const shop ={
    owner : 'Alia',
    address : {
        strret: ' kochukhet voot er goli',
        city : 'ranbir',
        country : 'BD'
    },
    products: ['laptop' ,'mic' , 'monitor' , 'keyboard'],
    revenue: 45000,
    isOpen : true,
    isNew: false
};

console.log(shop);
console.log(typeof shop); // object

// to convert JSON
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
console.log(typeof shopJSON); // string
// to convert original object
const shopObject = JSON.parse(shopJSON);
console.log(shopObject);
console.log(typeof shopObject);  // object