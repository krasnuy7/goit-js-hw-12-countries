import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const inputCountry = document.querySelector('.inputCountry');
const countryUl = document.querySelector('.country-ul');
countryUl.innerHTML = 'Введите странну';
function queryCountry() {
  if (inputCountry.value === '') {
    countryUl.innerHTML = 'Введите странну';
  } else {
    fetchCountries(inputCountry.value).then(data => {
      const country = data.map(country => country.name);
      const name = country.map(countr => `<li>${countr}</li>`).join('');
      const fullCountry = data
        .map(country => {
          return `
        <li> Country - ${country.name}</li>
     <li>Capital - ${country.capital}</li>
     <li>Population - ${country.population}</li>
     Language:
      <ul>${country.languages
        .map(lang => `<li>${lang.name}</li>`)
        .join('')}</ul>
        <li><img width='250' src='${country.flag}'></li>
     `;
        })
        .join('');

      if (country.length > 10) {
        countryUl.innerHTML = 'Введите больше букв';
      } else {
        countryUl.innerHTML = name;
      }
      if (country.length === 1) {
        countryUl.innerHTML = fullCountry;
      }
    });
  }
}
inputCountry.addEventListener('input', debounce(queryCountry, 500));
