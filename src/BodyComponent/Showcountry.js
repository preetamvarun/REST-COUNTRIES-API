import { useParams } from "react-router-dom";
import { useShowCountry } from "../Hooks/useShowCountry";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Showcountry = () => {
    const {name} = useParams();

    const data = useShowCountry(name);

    return data.length === 0 ? <h1>Getting the data</h1> : (
        <div className="text-white">
            <div className="inline-block bg-slate-600 py-2 px-8 m-8 rounded-md hover:cursor-pointer">
                <i className="fa-solid fa-arrow-left mr-1"></i>
                <Link to='/' className="text-white inline-block">Back</Link>
            </div>
            <div className="flex justify-evenly items-center relative">
                <div>
                    <img src={data[0].flags.svg} alt = {name} className = 'h-[250px] w-[320px]'/>
                </div>
                <div className="mb-3">
                    <p className="font-bold py-[2px]">{data[0].name.official}</p> 
                    <div className="mt-3">
                        <p className="py-[2px]"> <span className="font-medium">Native name :</span> {
                            Object.values(data[0].name.nativeName).splice(-1)[0].official
                        }</p>
                        <p className="py-1"><span className="font-medium">Population : </span>{data[0].population}</p>
                        <p className="py-1"><span className="font-medium">Region : </span>{data[0].region} </p>
                        <p className="py-1"><span className="font-medium">Sub Region : </span>{data[0].subregion} </p>
                        <p className="py-1"><span className="font-medium">Capital : </span>{data[0].capital[0]} </p>
                    </div>
                </div>
                <div>
                    <p><span className="font-semibold">Top Level Domain : </span>{data[0].tld[0]}</p>
                    <p className="py-1"><span className="font-semibold">Currency : </span> {Object.values(data[0].currencies)[0].name}</p>
                    <p><span className="font-semibold">Languages : </span>{Object.values(data[0].languages).join(',')}</p>
                </div>
                {/*
                    <div className="text-white left-1/2 bottom-0 bg-orange-500 absolute w-[30%]">
                        <span className="font-medium pl-1 text-sm">Border Countries : </span>
                        {
                            data[0].hasOwnProperty('borders') && data[0].borders.map((eachBorder) => <p key={uuidv4()} className = "inline-block p-1 text-sm">{eachBorder}</p>)
                        }
                    </div>                        
                */}
            </div>
        </div>
    )
}


export default Showcountry;