import { API_URL } from '../utils/Config';
import { useState, useEffect } from 'react';

const useCountriesState = () => {
  const [allCountries, setallCountries] = useState([]);

  async function getCountries() {
    const info = await fetch(API_URL);
    const json = await info.json();
    setTimeout(() => setallCountries(json), 10000);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return allCountries;
};

export default useCountriesState;
