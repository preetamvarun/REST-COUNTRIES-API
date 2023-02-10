function useFilterCountries(searchCountry, allCountries, region) {
  const data = allCountries.filter(eachCountry =>
    eachCountry.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  if (data.length == 0 || region === 'Filter By Region') return data;

  // If the region is not 'Filter By Region'

  return data.filter(eachCountry => eachCountry.region === region);
}

export default useFilterCountries;
