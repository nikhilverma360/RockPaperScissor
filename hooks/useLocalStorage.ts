import { useState, useEffect } from 'react';

// Define the type for your JSON data
type GameData = {
  gameAddress: string;
  move: string;
  salt: string;
};

// Define the key for your local storage
const STORAGE_KEY = 'gameData';

const useLocalStorage = () => {
  // State to store the data
  const [data, setData] = useState<GameData[]>([]);

  // Function to add data to local storage
  const addDataToLocalStorage = (newData: GameData) => {
    // Retrieve existing data from local storage
    const existingDataJSON = localStorage.getItem(STORAGE_KEY);
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

    // Add new data to existing data
    const updatedData = [...existingData, newData];

    // Update local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    // Update state
    setData(updatedData);
  };

  // Function to retrieve data from local storage
  const getDataFromLocalStorage = () => {
    // Retrieve data from local storage
    const existingDataJSON = localStorage.getItem(STORAGE_KEY);
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

    // Update state
    setData(existingData);
  };

  // useEffect to retrieve data from local storage on component mount
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return { data, addDataToLocalStorage };
};

export default useLocalStorage;