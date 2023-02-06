

function useFilterCountries(searchCountry, allCountries){
    const data = allCountries.filter((eachCountry) => eachCountry.name.official.toLowerCase().includes(searchCountry.toLowerCase()))
    return data;
}

export default useFilterCountries;
