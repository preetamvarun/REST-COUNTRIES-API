function useFilterCountries(searchCountry, allCountries, region) {
  const data = allCountries.filter(eachCountry =>
    eachCountry.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );
  if (data.length == 0 || region === 'Filter By Region') return data;
  const data1 = data.filter(eachCountry => eachCountry.region === region);
  return data1;
}

export default useFilterCountries;
