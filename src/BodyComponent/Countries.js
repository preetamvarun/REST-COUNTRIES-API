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
      <div className="max-w-[1010px] m-auto flex justify-between items-center py-8">
        <div className="bg-slate-700 rounded-md">
          <i className="fa-solid fa-magnifying-glass text-white relative pl-4 translate-y-[15%]"></i>
          <input
            type="text"
            value={searchCountry}
            placeholder="search for any country..."
            onChange={handleSearchCountry}
            className="bg-slate-700 text-gray-400 placeholder:font-semibold placeholder:text-xs placeholder:pl-1 py-3 pr-36 rounded-md outline-none pl-2"
          />
        </div>
        <select
          name="Region"
          id="Region"
          className="bg-slate-600 text-gray-400 text-sm rounded-sm py-3 pl-2 outline-none"
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
        <div className="max-w-[1024px] m-auto flex justify-center flex-wrap items-center">
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
