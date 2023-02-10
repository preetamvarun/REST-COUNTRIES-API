function useFilterRegion(region, allCountries) {
  return region === 'Filter By Region'
    ? allCountries
    : allCountries.filter(eachCountry => eachCountry.region === region);
}

export default useFilterRegion;
