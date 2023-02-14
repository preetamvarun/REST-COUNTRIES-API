import { useEffect, useState } from 'react';
import useCountriesState from '../Hooks/useShowAllCountries';
import Country from './Country';
import useFilterCountries from '../Hooks/useFilterCountries';
import useFilterRegion from '../Hooks/useFilterRegion';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setBackgroundColor, setCountriesBackgroundColor } from '../utils/modeSetters.js';
import Shimmer from '../utils/Shimmer';

const Countries = ({ modeColor }) => {
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

  return (
    <div className={`${setCountriesBackgroundColor(modeColor)}`}>
      <div
        className="flex justify-center items-start py-8 flex-col 
      lg:flex lg:flex-row lg:items-center lg:justify-between 
      lg:max-w-[1024px] lg:m-auto xl:max-w-[1280px] xl:m-auto 2xl:max-w-[1536px] 2xl:m-auto"
      >
        <div
          className={`${setBackgroundColor(modeColor)} rounded-md m-3 w-5/6 md:w-1/2 lg:w-1/3`}
          style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
        >
          <i
            className="fa-solid fa-magnifying-glass text-gray-500 relative
           pl-4 translate-y-[15%]"
          ></i>
          <input
            type="text"
            value={searchCountry}
            placeholder="search for any country..."
            onChange={handleSearchCountry}
            className={`${setBackgroundColor(
              modeColor
            )} text-gray-500 placeholder:font-semibold placeholder:text-xs 
            placeholder:pl-1 py-3 rounded-md outline-none pl-2`}
          />
        </div>
        <select
          name="Region"
          id="Region"
          className={`${setBackgroundColor(
            modeColor
          )} lg:mt-3 text-gray-500 text-[12px] rounded-sm py-3 pl-2 outline-none m-3 mt-1`}
          onChange={handleRegionFilter}
          style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
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
      {allCountries.length === 0 ? (
        <Shimmer modeColor={modeColor} />
      ) : (
        <div
          className="flex justify-center flex-wrap items-center 
        lg:max-w-[1300px] lg:m-auto xl:max-w-[1400px] xl:m-auto 2xl:max-w-[1536px] 
        2xl:m-auto"
        >
          {filteredCountries.map(eachCountry => (
            <Link to={`/country/${eachCountry.name.common}`} key={uuidv4()}>
              <Country
                name={eachCountry.name.common}
                imageSrc={eachCountry.flags.svg}
                population={eachCountry.population}
                capital={eachCountry.capital !== undefined ? eachCountry.capital : 'No Capital'}
                region={eachCountry.region}
                modeColor={modeColor}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
