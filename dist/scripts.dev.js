"use strict";

// require('dotenv').config();
var ApiKey = '23d7764695msh0166b665bb35ba3p1515e4jsncc6ae020f670';
onLoad();
getJoke();
getChuckNorrisJoke();
getCovid19Statistics();

function onLoad() {
  document.getElementById('getJoke').onclick = getJoke;
  document.getElementById('getChuckNorrisJoke').onclick = getChuckNorrisJoke;
}

function getJoke() {
  var options;
  return regeneratorRuntime.async(function getJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': ApiKey,
              'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
            }
          };
          fetch('https://manatee-jokes.p.rapidapi.com/manatees/random', options).then(function (response) {
            return response.json();
          }).then(function (response) {
            document.getElementById('JokeSetup').innerHTML = response.setup;
            document.getElementById('JokePunchline').innerHTML = response.punchline;
          })["catch"](function (err) {
            return console.error(err);
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getChuckNorrisJoke() {
  var options;
  return regeneratorRuntime.async(function getChuckNorrisJoke$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-RapidAPI-Key': ApiKey,
              'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
          };
          fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options).then(function (response) {
            return response.json();
          }).then(function (response) {
            document.getElementById('chuckNorrisJoke').innerHTML = response.value;
          })["catch"](function (err) {
            return console.error(err);
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getCovid19Statistics() {
  var options;
  return regeneratorRuntime.async(function getCovid19Statistics$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': ApiKey,
              'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
          };
          fetch('https://covid-193.p.rapidapi.com/statistics', options).then(function (response) {
            return response.json();
          }).then(function (response) {
            response.response.forEach(function (res) {
              var option = document.createElement('option');
              option.innerHTML = res.country;
              document.getElementById('countries').appendChild(option);
            });
            var covid19data = response.response;

            document.getElementById('countries').onchange = function () {
              var selectedValue = document.getElementById('countries').value;
              var countryData = covid19data.filter(function (c) {
                return c.country == selectedValue;
              })[0];
              var newConfirmed = document.getElementById('covidNewConfirmed');
              var totalConfirmed = document.getElementById('covidTotalConfirmed');
              var covidNewDeaths = document.getElementById('covidNewDeaths');
              var covidTotalDeaths = document.getElementById('covidTotalDeaths');
              var lastUpdated = document.getElementById('covidLastUpdate');
              countryData.cases["new"] ? newConfirmed.innerHTML = 'New confirmed cases: ' + countryData.cases["new"] : newConfirmed.innerHTML = 'New confirmed cases: 0';
              countryData.cases.total ? totalConfirmed.innerHTML = 'Total confirmed cases: ' + countryData.cases.total : totalConfirmed.innerHTML = 'Total confirmed cases: 0';
              countryData.deaths["new"] ? covidNewDeaths.innerHTML = 'New deaths: ' + countryData.deaths["new"] : covidNewDeaths.innerHTML = 'New deaths: 0';
              countryData.deaths.total ? covidTotalDeaths.innerHTML = 'Total deaths: ' + countryData.deaths.total : covidTotalDeaths.innerHTML = 'Total deaths: 0';
              lastUpdated.innerHTML = 'Last updated: ' + countryData.day;
            };
          })["catch"](function (err) {
            return console.error(err);
          });

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}