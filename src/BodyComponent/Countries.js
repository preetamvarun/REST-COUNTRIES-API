import { useEffect, useState } from "react";
import useCountriesState from "../Hooks/useShowAllCountries";
import Country from "./Country";
import useFilterCountriesState from "../Hooks/useFilterCountries";
import useFilterRegion from '../Hooks/useFilterRegion';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Shimmer from "../Utils/Shimmer";

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

    return allCountries.length === 0 ? <Shimmer/> : (
        <div className="bg-slate-800">
                <div className="max-w-[1010px] m-auto flex justify-between items-center py-8">
                    <input 
                    type="text" 
                    value={searchCountry}
                    placeholder="search for any country..." 
                    onChange={handleSearchCountry}
                    className="bg-slate-600 text-gray-400 placeholder:font-semibold placeholder:text-xs placeholder:pl-3 py-3 pr-36 rounded-sm outline-none pl-2"/>
                    <select name = 'Region' id = 'Region' className="bg-slate-600 text-gray-400 text-sm rounded-sm py-3 pl-2 outline-none"
                    value = {region} onChange={handleRegionFilter}>
                        <option value = "Filter By Region">Filter By Region</option>
                        <option>Asia</option>
                        <option>Africa</option>
                        <option>Americas</option>
                        <option>Europe</option>
                        <option>Oceania</option>
                    </select>
            </div>
            <div className="">
                <div className="max-w-[1024px] m-auto flex justify-center flex-wrap items-center">
                    {
                        filteredCountries.map((eachCountry) => 
                        <Link to = {`/country/${eachCountry.name.official}`} key = {uuidv4()}>
                            <Country name = {eachCountry.name.official} imageSrc = {eachCountry.flags.svg} 
                            population = {eachCountry.population}
                            capital = {eachCountry.capital} region = {eachCountry.region}
                            />
                        </Link>
                        )
                    } 
                </div>   
            </div>
        </div>
    )
}

export default Countries;