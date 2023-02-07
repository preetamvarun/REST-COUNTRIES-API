import { COUNTRY_API_URL } from "../Utils/Config";
import { useState, useEffect } from "react";



export const useShowCountry = (countryName) => {
    const [countryData, setCountryData] = useState([]);

    async function getCountryData(){
        const data = await fetch(COUNTRY_API_URL + countryName + "?fullText=true");
        const json = await data.json();
        setCountryData(json);
    }

    useEffect(() => {
        getCountryData();
    }, [])


    return countryData;
}