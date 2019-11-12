const request = require('request');

// const getWeather = () => {
//     request({              //request takes 2 objects and a boolean 
//         uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.APPID}`,  //data for the end point provided
//         json: true                  //specifiec we wanted the data in json makes it appear in JS
//     }, (err, res) => {              //callback function
//         if(err) throw err;          //throw an error with err if theres an error
//         console.log(res.body);      //console.log the body 
//     });
// }

// getWeather();


//to change units to metric add '&' after link and paste metric bit in 
const fs = require('fs');
const {promisify} = require('util')

const promisifiedRequest = promisify(request)   //promosifying request which tells api to collect the required data

const getWeather = async () => {
    let data = await promisifiedRequest({       //awaiting function to collect all the data before console logging
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.APPID}`,  
        json: false                  
    });         
        console.log(data.body); 
        fs.writeFileSync('weatherData.json', data.body, () => {})   //to pass the data into json make json: false, then fs.writeFileSync                                                                with a path and the data u want to pass

}

getWeather();

let content = fs.readFileSync('weatherData.jason', 'utf8')        //need to specify utf8 because the file when writing it it is stored as                                                                    a utf8
console.log(content)

//save data file

//use Fs (file system module)



