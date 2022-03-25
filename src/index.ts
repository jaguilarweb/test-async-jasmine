/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(name: string){
  const getApi = await axios(
    `https://restcountries.com/v2/name/${name}`
  );
  const data = getApi.data[0];
  return {capital: data.capital, region: data.region, numericCode: data.numericCode };
}


/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */

async function getRegionCapitals(regionalbloc: string){
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}?fields=capital`
  );
  const data = getApi.data;
  const capitals = [];
  for (let i = 0; i < data.length; i++) {
    capitals.push(data[i].capital);
  }
  return capitals;
}


export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
