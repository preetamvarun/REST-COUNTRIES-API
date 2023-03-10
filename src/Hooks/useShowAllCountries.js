import { API_URL } from '../Utils/Config';
import { useState, useEffect } from 'react';

const useCountriesState = () => {
  const [allCountries, setallCountries] = useState([]);

  async function getCountries() {
    const info = await fetch(API_URL);
    const json = await info.json();
    setTimeout(() => setallCountries(json), 1000);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return allCountries;
};

export default useCountriesState;
