import { useParams } from "react-router-dom";
import { useShowCountry } from "../Hooks/useShowCountry";


const Showcountry = () => {
    const {name} = useParams();

    const data = useShowCountry(name);

    console.log(data);

    return data.length === 0 ? <h1>Getting the data</h1> : (
        <div className="bg-slate-800 text-white">
            <img src={data[0].flags.svg} alt = {name}/>
            <div>
                <p>name</p> 
                <p>Native name :</p>
                <p>Population : </p>
                <p>Region : </p>
                <p>Sub Region : </p>
                <p>Capital : </p>
            </div>
            <div>
                <p>Top Level Domain : </p>
                <p>Currencies : </p>
                <p>Languages : </p>
            </div>
            {
                data[0].hasOwnProperty('borders') && data[0].borders.map((eachBorder) => <p>{eachBorder}</p>)
            }
        </div>
    )
}

export default Showcountry;