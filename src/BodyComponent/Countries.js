import { useEffect, useState } from "react";

import useCountriesState from "../Hooks/useShowAllCountries";
import Country from "./Country";
import useFilterCountriesState from "../Hooks/useFilterCountries";
import useFilterRegion from '../Hooks/useFilterRegion';

const Countries = () => {

    const allCountries = useCountriesState();

    const [filteredCountries, setfilteredCountries] = useState([]);

    const [searchCountry, setsearchCountry] = useState('');

    const [region, setRegion] = useState('Filter By Region');
    

    useEffect(() => {
        setfilteredCountries(allCountries);
    }, [allCountries]);

    useEffect(() => {
        setfilteredCountries(useFilterCountriesState(searchCountry,allCountries));
    }, [searchCountry])

    useEffect(() => {
        setfilteredCountries(useFilterRegion(region,allCountries));
    },[region])

    function handleSearchCountry(evt){
        setsearchCountry(evt.target.value)
    }

    function handleRegionFilter(evt){
        setRegion(evt.target.value);
    }

    return allCountries.length === 0 ? <h1>Getting the data</h1> : (
        <div className="bg-slate-900">
            <div className="flex justify-between">
                <input 
                type="text" 
                value={searchCountry}
                placeholder="search for any country..." 
                onChange={handleSearchCountry}
                className="bg-slate-600 text-gray-400 placeholder:font-semibold placeholder:text-sm placeholder:pl-2"/>

                <select name = 'Region' id = 'Region' className="bg-slate-600 text-gray-400 text-sm"
                value = {region} onChange={handleRegionFilter}>
                    <option value = "Filter By Region">Filter By Region</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>

            </div>
            <div className="flex justify-evenly items-center flex-wrap">
                {
                    filteredCountries.map((eachCountry) => 
                    <Country name = {eachCountry.name.official} imageSrc = {eachCountry.flags.svg} 
                    population = {eachCountry.population}
                    capital = {eachCountry.capital} region = {eachCountry.region}
                    />)
                }
            </div>
        </div>
    )
}

export default Countries;