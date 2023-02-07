import { useParams } from "react-router-dom";
import { useShowCountry } from "../Hooks/useShowCountry";
import { Link } from "react-router-dom";


const Showcountry = () => {
    const {name} = useParams();

    const data = useShowCountry(name);

    return data.length === 0 ? <h1>Getting the data</h1> : (
        <div>
            <Link to = '/'>Back</Link>
            <div className="bg-slate-800 text-white">
            <img src={data[0].flags.svg} alt = {name}/>
            <div>
                <p>name : {data[0].name.official}</p> 
                <p>Native name : {
                    Object.values(data[0].name.nativeName).splice(-1)[0].official
                }</p>
                <p>Population : {data[0].population}</p>
                <p>Region : {data[0].region} </p>
                <p>Sub Region : {data[0].subregion} </p>
                <p>Capital : {data[0].capital[0]} </p>
            </div>
            <div>
                <p>Top Level Domain : {data[0].tld[0]}</p>
                <p>Currency : {Object.values(data[0].currencies)[0].name}</p>
                <p>Languages : {Object.values(data[0].languages).join(',')}</p>
            </div>
            {
                data[0].hasOwnProperty('borders') && data[0].borders.map((eachBorder) => <p>{eachBorder}</p>)
            }
        </div>
        </div>
    )
}

export default Showcountry;