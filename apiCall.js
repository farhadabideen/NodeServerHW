var axios = require('axios');

var url = "https://restcountries.com/v3.1/all";

axios.get(url).then(function(res){
    let countryList = res.data;
    let statusCode = res.statusCode;

    console.log(countryList);
    console.log(statusCode);

}).catch(function(error){
    console.log(error);
});