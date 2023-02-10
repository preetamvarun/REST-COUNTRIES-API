import { formatPopulation } from '../utils/populationFormatter';

const Country = props => {
  return (
    <div className="text-white m-2 bg-slate-700 rounded-lg h-[300px] w-60 overflow-hidden">
      <div className="h-1/2 mb-2 opacity-80 hover:opacity-[100] hover:scale-110 duration-200">
        <img src={props.imageSrc} alt={props.name} className="w-[100%] h-[100%] object-cover" />
      </div>
      <p className="font-bold text-sm p-2">{props.name}</p>
      <div className="p-2 text-sm">
        <p className="p-[.75px]">
          <span className="font-semibold">Population : </span>
          {formatPopulation(props.population)}
        </p>
        <p className="p-[.75px]">
          <span className="font-semibold">Region : </span>
          {props.region}
        </p>
        <p className="p-[.75px]">
          <span className="font-semibold">Capital : </span>
          {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;

/*
    <div className = "h-1/2 mb-2 relative overflow-hidden before:content-[''] hover:before:bg-[rgba(0,0,0,0)] duration-200 hover:scale-110 before:bg-[rgba(0,0,0,.2)] before:absolute before:z-10 before:top-0 before:left-0 before:right-0 before:bottom-0">
        <img src = {props.imageSrc} alt = {props.name} className = 'w-[100%] h-[100%] object-cover'/>
    </div>
*/
