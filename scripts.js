// require('dotenv').config();
const ApiKey ='23d7764695msh0166b665bb35ba3p1515e4jsncc6ae020f670';

onLoad()
getJoke()
getChuckNorrisJoke()
getCovid19Statistics ()
function onLoad()
{
    document.getElementById('getJoke').onclick = getJoke;
    document.getElementById('getChuckNorrisJoke').onclick = getChuckNorrisJoke;

}


async function getJoke()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
        }
    };
fetch('https://manatee-jokes.p.rapidapi.com/manatees/random', options)
	.then(response => response.json())
	.then(response => {
      
        document.getElementById('JokeSetup').innerHTML = response.setup;
        document.getElementById('JokePunchline').innerHTML = response.punchline;
    })
	.catch(err => console.error(err));

}
async function getChuckNorrisJoke(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('chuckNorrisJoke').innerHTML = response.value;
        })
        .catch(err => console.error(err));
    }


    async function getCovid19Statistics (){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': ApiKey,
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };
        
        fetch('https://covid-193.p.rapidapi.com/statistics', options)
            .then(response => response.json())
            .then(response => {

                response.response.forEach(res => {
                    const option = document.createElement('option');
                    option.innerHTML = res.country;
                    document.getElementById('countries').appendChild(option);
                })
                const covid19data = response.response;
                document.getElementById('countries').onchange = function() {
                    const selectedValue = document.getElementById('countries').value;
                    const countryData = covid19data.filter(c => c.country == selectedValue)[0];
            
            
                    const newConfirmed = document.getElementById('covidNewConfirmed');
                    const totalConfirmed = document.getElementById('covidTotalConfirmed');
                    const covidNewDeaths = document.getElementById('covidNewDeaths');
                    const covidTotalDeaths = document.getElementById('covidTotalDeaths');
                    const lastUpdated = document.getElementById('covidLastUpdate');
            
                    (countryData.cases.new) ? newConfirmed.innerHTML = 'New confirmed cases: ' + countryData.cases.new : newConfirmed.innerHTML = 'New confirmed cases: 0';
                    (countryData.cases.total) ? totalConfirmed.innerHTML = 'Total confirmed cases: ' + countryData.cases.total : totalConfirmed.innerHTML = 'Total confirmed cases: 0';
                    (countryData.deaths.new) ? covidNewDeaths.innerHTML = 'New deaths: ' + countryData.deaths.new : covidNewDeaths.innerHTML = 'New deaths: 0';
                    (countryData.deaths.total) ? covidTotalDeaths.innerHTML = 'Total deaths: ' + countryData.deaths.total : covidTotalDeaths.innerHTML = 'Total deaths: 0';
                    lastUpdated.innerHTML = 'Last updated: ' + countryData.day;
                };
            })
            .catch(err => console.error(err));
    }

