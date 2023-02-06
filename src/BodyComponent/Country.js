const Country = (props) => {
    return (
        <div className="text-white m-2 flex-col justify-evenly items-center bg-slate-700 rounded-md h-[370px] w-52">
            <img src = {props.imageSrc} alt = {props.name} className = ''/>
            <p className="w-5/6 relative left-1/2 translate-x-[-50%] mt-1 text-center">{props.name}</p>
            <div>
                <p>Population : {props.population}</p>
                <p>Region : {props.region}</p>
                <p>Capital : {props.capital}</p>
            </div>
        </div>
    )
}

export default Country;