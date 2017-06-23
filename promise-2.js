const request = require('request')

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address)

    return new Promise((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('Cannot connect to Google servers')
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address')
            } else if (body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
}

geocodeAddress('00000')
.then((location) => {
    console.log('Current Address: ', location.address)
}, (errorMsg) => {
    console.log(errorMsg)
})
