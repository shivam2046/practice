// localStorage.clear();
// localStorage.setItem('user','shivam');

// var user=localStorage.getItem('user');
// console.log(user);


// var obj={
//     username:"shivam",
//     email:"s@s.com",
//     city:"samastipur",
// }
// localStorage.setItem('obj',JSON.stringify(obj));
// console.log(obj);

localStorage.clear();
localStorage.setItem('user', 'shivam');

var user = localStorage.getItem('user');
console.log(user);

var obj = {
    username: "shivam",
    email: "s@s.com",
    city: "samastipur",
};

var newobj = JSON.stringify(obj);

localStorage.setItem('obj', newobj); // FIXED

// To read it back:
var storedObj = JSON.parse(localStorage.getItem('obj'));
console.log(storedObj);