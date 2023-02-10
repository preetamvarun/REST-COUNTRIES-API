function useFilterRegion(region, allCountries, searchCountry) {
  let data;
  data =
    region === 'Filter By Region'
      ? allCountries
      : allCountries.filter(eachCountry => eachCountry.region === region);

  // There is something in the search input
  if (searchCountry.length !== 0) {
    data = data.filter(eachCountry =>
      eachCountry.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    );
  }

  return data;
}

export default useFilterRegion;
