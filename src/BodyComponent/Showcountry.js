import { useParams } from "react-router-dom";
import { useShowCountry } from "../Hooks/useShowCountry";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Showcountry = () => {
    const {name} = useParams();

    const data = useShowCountry(name);

    console.log(data);


    return Object.keys(data).length === 0 ? <h1>Getting the data</h1> : (
        <div className="bg-slate-800 text-white">
            <Link to = '/' className="inline-block">Back</Link>
            <div className=" text-white flex justify-evenly items-center">
                <div className="bg-orange-600">
                    <img src={data[0].flags.svg} alt = {name}/>
                </div>
                <div className="bg-red-500">
                    <p className="font-bold py-[2px]">{data[0].name.official}</p> 
                    <p className="py-[2px]">Native name : {
                        Object.values(data[0].name.nativeName).splice(-1)[0].official
                    }</p>
                    <p className="py-[2px]">Population : {data[0].population}</p>
                    <p className="py-[2px]">Region : {data[0].region} </p>
                    <p className="py-[2px]">Sub Region : {data[0].subregion} </p>
                    <p className="py-[2px]">Capital : {data[0].capital[0]} </p>
                </div>
                <div className="bg-green-500">
                    <p>Top Level Domain : {data[0].tld[0]}</p>
                    <p>Currency : {Object.values(data[0].currencies)[0].name}</p>
                    <p>Languages : {Object.values(data[0].languages).join(',')}</p>
                </div>
            </div>
        <div className="text-white bg-orange-800 w-[30%]">
                {
                    data[0].hasOwnProperty('borders') && data[0].borders.map((eachBorder) => <p key={uuidv4()} className = 'inline-block p-1'>{eachBorder}</p>)
                }
        </div>
        </div>
    )
}

export default Showcountry;