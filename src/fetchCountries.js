export const fetchCountries = function (country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {});
};
