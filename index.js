// classes mini lab 
// to create a class we start with the "class" function and word - the first letter must be capitalize

class User {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

const userOne = new User("userOne@email.com", "UserOne", "password")
console.log(userOne);

const userTwo = new User("helloWorld@email.com", "userTwo", 5123123231)
console.log(userTwo);

const userThree = new User("userThree@gmail.com", "userThree", "i-am-user-three")
console.log(userThree);