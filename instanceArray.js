/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
users.push(User("Tyler", "tylermcginnis33@gmail.com", "ilove35"), User('Cahlan', 'cahlan@devmounta.in', 'iloveHashtags'), User('Lenny', 'Lenny@theLenster.com', 'iloveLentilSoup'));

;
//Console.log all of Tylers information

  //code here
console.log('Tyler\'s information is ' + users[0]);

//Now console.log all of Lennys information

  //code here
console.log('Lenny\'s information is ' + users[2]);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
users.push(User('Tanner', 'tanner.andersen14@gmail.com', 'password'));

//Now loop through your users Array and console.log every users name.

  //code here
console.log('All my users names are ')
function loopThrough(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('All my users names are ' + arr[i].name);
  }
}
