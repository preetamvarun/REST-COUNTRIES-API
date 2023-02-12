import { useEffect, useState } from 'react';
import useCountriesState from '../Hooks/useShowAllCountries';
import Country from './Country';
import useFilterCountries from '../Hooks/useFilterCountries';
import useFilterRegion from '../Hooks/useFilterRegion';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Shimmer from '../utils/Shimmer';

const Countries = () => {
  const allCountries = useCountriesState();

  const [filteredCountries, setfilteredCountries] = useState([]);

  const [searchCountry, setsearchCountry] = useState('');

  const [region, setRegion] = useState('Filter By Region');

  useEffect(() => {
    setfilteredCountries(allCountries);
  }, [allCountries]);

  useEffect(() => {
    setfilteredCountries(useFilterCountries(searchCountry, allCountries, region));
  }, [searchCountry]);

  useEffect(() => {
    setfilteredCountries(useFilterRegion(region, allCountries, searchCountry));
  }, [region]);

  function handleSearchCountry(evt) {
    setsearchCountry(evt.target.value);
  }

  function handleRegionFilter(evt) {
    setRegion(evt.target.value);
  }

  return allCountries.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-800">
      <div className="flex justify-center items-start py-8 flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-[1024px] lg:m-auto">
        <div className="bg-slate-700 rounded-md m-3 w-5/6 md:w-1/2 lg:w-1/3">
          <i className="fa-solid fa-magnifying-glass text-white relative pl-4 translate-y-[15%]"></i>
          <input
            type="text"
            value={searchCountry}
            placeholder="search for any country..."
            onChange={handleSearchCountry}
            className="bg-slate-700 text-gray-400 placeholder:font-semibold placeholder:text-xs placeholder:pl-1 py-3 rounded-md outline-none pl-2"
          />
        </div>
        <select
          name="Region"
          id="Region"
          className="bg-slate-600 lg:mt-3 text-gray-400 text-[12px] rounded-sm py-3 pl-2 outline-none m-3 mt-1"
          onChange={handleRegionFilter}
        >
          <option value="Filter By Region">Filter By Region</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Antarctic</option>
        </select>
      </div>
      <div>
        <div className="flex justify-center flex-wrap items-center lg:max-w-[1024px] lg:m-auto">
          {filteredCountries.map(eachCountry => (
            <Link to={`/country/${eachCountry.name.official}`} key={uuidv4()}>
              <Country
                name={eachCountry.name.common}
                imageSrc={eachCountry.flags.svg}
                population={eachCountry.population}
                capital={eachCountry.capital !== undefined ? eachCountry.capital : 'No Capital'}
                region={eachCountry.region}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
