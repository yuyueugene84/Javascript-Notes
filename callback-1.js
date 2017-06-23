var getUser = function(id, callback){
    var user = {
        id: id,
        name: 'Eugene'
    }

    setTimeout(() => {
        callback(user)
    }, 1500);
}

var printUser = function(user){
    console.log(user);
}

getUser(1, printUser);

console.log('Finish up')
