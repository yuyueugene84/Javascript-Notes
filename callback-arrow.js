var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Eugene'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUser(1, (userObject) => {
    console.log(userObject)
});

console.log('Finish up');