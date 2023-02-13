import { useParams } from 'react-router-dom';
import { useShowCountry } from '../Hooks/useShowCountry';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { formatPopulation } from '../utils/populationFormatter';

const Showcountry = ({ modeColor }) => {
  const { name } = useParams();

  let data = useShowCountry(name);

  return Object.keys(data).length === 0 ? (
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
      <div className="flex flex-col justify-evenly items-start relative md:flex-row md:items-center ml-2 md:ml-0">
        <div className="overflow-hidden h-[250px] w-[300px]">
          <img src={data.flags.svg} alt={name} className="h-[100%] w-[100%] object-cover" />
        </div>
        <div className="mb-3">
          <p className="font-bold py-[2px]">{data.name.official || 'No Name'}</p>
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
        <div>
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
          <p>
            <span className="font-semibold">Languages : </span>
            {data.hasOwnProperty('languages')
              ? Object.values(data.languages).join(',')
              : 'No languages'}
          </p>
        </div>
      </div>
      <div
        className={`${
          modeColor === 'Dark Mode' ? 'text-white bg-slate-800' : 'text-black bg-[#FAFAFA]'
        } w-[80%] mb-1 md:w-[40%] relative left-1/2 -translate-x-1/2 mt-8 text-center`}
      >
        <span className="font-medium pl-1 text-sm">Border Countries : </span>
        {data.hasOwnProperty('borders') ? (
          data.borders.map(eachBorder => (
            <p key={uuidv4()} className="inline-block p-1 text-sm">
              {eachBorder}
            </p>
          ))
        ) : (
          <p className="inline-block text-xs font-light"> No borders... </p>
        )}
      </div>
    </div>
  );
};

export default Showcountry;
