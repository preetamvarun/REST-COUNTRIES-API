import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { formatPopulation } from '../Utils/populationFormatter';
import useCountriesState from '../Hooks/useShowAllCountries';
import { useEffect, useState } from 'react';

const Showcountry = ({ modeColor }) => {
  const { name } = useParams();

  const allCountries = useCountriesState();

  const [dataArr, setData] = useState([]);

  let data = dataArr[0];

  function getLanguages(data) {
    return data.hasOwnProperty('languages')
      ? Object.values(data.languages).join(',')
      : 'No languages';
  }

  useEffect(() => {
    if (allCountries) {
      setData(allCountries.filter(country => country.name.common === name));
    }
  }, [name, allCountries]);

  function getCountryName(cca3) {
    return allCountries.filter(country => country.cca3 === cca3)[0].name.common;
  }

  function displayBorderLinks(bordersArr) {
    const borderCountries = bordersArr.map(cca3 => getCountryName(cca3));
    return borderCountries;
  }

  return dataArr.length === 0 ? (
    <div
      className={`text-center text-2xl pt-4
    ${
      modeColor === 'Dark Mode' ? 'bg-slate-800 text-white' : 'bg-[#FAFAFA] text-black'
    } min-h-screen`}
    >
      Getting The Country Data....
    </div>
  ) : (
    <div
      className={
        modeColor === 'Dark Mode'
          ? 'bg-slate-800 text-white min-h-screen'
          : 'bg-[#FAFAFA] text-black min-h-screen'
      }
      style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
    >
      <Link
        to="/"
        className={`inline-block ${modeColor === 'Dark Mode' ? 'text-white' : 'text-black'}}`}
      >
        <div
          className={`inline-block ${
            modeColor === 'Dark Mode' ? 'bg-slate-600' : 'bg-white'
          } py-2 px-8 m-8 rounded-md`}
          style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
        >
          <i className="fa-solid fa-arrow-left mr-1"></i>
          <span>Back</span>
        </div>
      </Link>

      <div className="flex flex-col ml-2 md:flex-row md:items-start">
        <div className="flex flex-col pr-2 scale-90 sm:scale-[100%]  md:flex-1 md:w-0 lg:flex-row lg:flex-[2] lg:w-0">
          <div className="lg:w-[38rem] lg:mr-4">
            <img src={data.flags.svg} alt={name} className="h-full w-full object-cover" />
          </div>
          <div className="mb-3">
            <p className="font-bold py-[2px]">{data.name.common || 'No Name'}</p>
            <div className="mt-3">
              <p className="py-[2px]">
                <span className="font-medium">Native name : </span>
                {data.name.hasOwnProperty('nativeName')
                  ? Object.values(data.name.nativeName).splice(-1)[0].official
                  : 'No native name'}
              </p>
              <p className="py-1">
                <span className="font-medium">Population : </span>
                {formatPopulation(Number(data.population)) || 'No population'}
              </p>
              <p className="py-1">
                <span className="font-medium">Region : </span>
                {data.region || 'No region'}
              </p>
              <p className="py-1">
                <span className="font-medium">Sub Region : </span>
                {data.subregion || 'No sub region'}
              </p>
              <p className="py-1">
                <span className="font-medium">Capital : </span>
                {data.hasOwnProperty('capital') ? data.capital[0] : 'No capital'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 md:flex-1 md:w-0 lg:w-0 lg:flex-1 ml-[10px] sm:ml-0">
          <p>
            <span className="font-semibold">Top Level Domain : </span>
            {data.tld[0] || 'No top level domain'}
          </p>
          <p className="py-1">
            <span className="font-semibold">Currency : </span>
            {data.hasOwnProperty('currencies')
              ? Object.values(data.currencies)[0].name
              : 'No currencies'}
          </p>
          <div>
            <p className="break-words">
              <strong>Languages : </strong>
              <p>{getLanguages(data)}</p>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          modeColor === 'Dark Mode' ? 'text-white bg-slate-800' : 'text-black bg-[#FAFAFA]'
        } w-[80%] mb-1 md:w-[40%] relative left-1/2 -translate-x-1/2 mt-8 text-center`}
      >
        <span className="font-medium pl-1 text-sm">Border Countries : </span>
        {data.hasOwnProperty('borders') ? (
          displayBorderLinks(data.borders).map(ele => (
            <Link
              style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
              key={uuidv4()}
              to={`/country/${ele}`}
              className={`inline-block m-1 px-2 py-1 ${
                modeColor === 'Dark Mode' ? 'bg-slate-700 text-white' : 'bg-white text-black'
              }`}
            >
              {ele}
            </Link>
          ))
        ) : (
          <p className="inline-block text-xs font-light"> No borders... </p>
        )}
      </div>
    </div>
  );
};

export default Showcountry;
// <p className="inline-block px-2 py-1 text-sm bg-slate-700 m-1">{eachBorder}</p>
