const { render } = require('ejs');
const express = require('express');
const request = require('request');
router = express.Router();

router = express.Router();
// router.use('view engine', 'ejs');

router.get('/', (req,res) =>{
    res.render('index');
});

router.get('/show', (req,res) => {
    //getting the data inputed on search form 
    let data = req.query;
    //These code snippets ('options & request') we taken from https://rapidapi.com/aldair.sr99/api/world-population?endpoint=apiendpoint_4edc9a8e-1609-4dcc-9c83-aefe45b51a5f
    // Endpoints
    const options = {
        method: 'GET',
        url: 'https://world-population.p.rapidapi.com/population',
        qs: {country_name: data.country},
        headers: {
          'x-rapidapi-key': '05732fb563mshb231d75d1cd9889p1fb5acjsnd6826fea4ba7',
          'x-rapidapi-host': 'world-population.p.rapidapi.com',
          useQueryString: true
        }
      };
      
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        //Using JSON.parse to make the data more accesable and easy reading
        let data = JSON.parse(body);
        // console.log(json);
        console.log(data.body.country_name, data.body.population, data.body.ranking);
        res.render('show_data',{ country: data.body.country_name, population: data.body.population, ranking: data.body.ranking});
    });    
});



router.use((req,res) =>{
    res.render('404');
});

module.exports = router;