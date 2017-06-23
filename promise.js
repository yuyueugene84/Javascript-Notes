var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}

// simple call
// asyncAdd(5,'7').then((res) => {
//     console.log(res)
//     return asyncAdd(res, 33) 
// }, (errorMessage) => {
//     console.log(errorMessage)
// }).then((res) => {
//     console.log('should be 45: ', res)
// }, (errorMsg) => {
//     console.log(errorMsg)
// })

// same case using catch
asyncAdd(5,'7').then((res) => {
    console.log(res)
    return asyncAdd(res, 33)
}).then((res) => {
    console.log('should be 45: ', res)
}).catch((errorMsg) => {
    console.log(errorMsg)
})


// var somePromise = new Promise((resolve, reject) => {
//     // making a promise, it's either resolve (fulfilled) or rejected
//     reject('Unable to fulfill promise')
//     resolve("Hey's it's resolved")
//     // the promise function will only resolve once, when resolve is 
//     // exectued, it won't execute reject
// })

// somePromise.then((message) => {
//     console.log('Success:', message)
// }, (errorMessage) => {
//     console.log('Error:', errorMessage)
// })