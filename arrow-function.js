var square = (x) => x**2
console.log(square(9))

var user = {
    name: 'Eugene',
    // arrow function does not bind `this`
    sayHi: () => {
        // arrow function argument will return global argumeents variables
        console.log(arguments)
        console.log(`Hi, I'm ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi, I'm ${this.name}`)
    }
}
user.sayHi()
user.sayHiAlt()
user.sayHiAlt(1,2,3)