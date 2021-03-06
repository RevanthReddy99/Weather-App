const request = require('request');
const geocode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicnJ5YXJyYW0zNyIsImEiOiJja3kxcWx1bjIwMXJjMm5uMWUzNG1yemt0In0._IaZrcYMX0S4s5pF6oI5VA&limit=1';
    //encodeURIComponent() functions return safe version of address for example if uses searches for Indi? then if do not use this
    //encodeUR function then program crashes
    request({url: url,json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to Location',undefined);
        }
        else if(response.body.features.length===0){
            callback('No such city exists..',undefined);
        }
        else{
            callback(undefined,
                {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                }
                )
        }
    })
}
module.exports=geocode;