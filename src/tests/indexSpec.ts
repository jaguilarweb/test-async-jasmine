import countries from "../index";

it("should get basic data on the country canada", async () => {
  const data = await countries.getCountry('canada');
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  });
});

/** Add test for getRegionCountries function here */

it("should get names of regional countries", async () => {
  const data = await countries.getRegionCountries('efta');
  expect(data).toEqual([
    'Iceland', 'Liechtenstein', 'Norway', 'Switzerland'
  ]);
});




it("should get capitals of NAFTA countries", async () => {
  const data = await countries.getRegionCapitals('nafta');
  expect(data).toEqual([
    'Ottawa', 'Mexico City', 'Washington, D.C.'
  ]);
});