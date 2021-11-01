import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../lib/storage";

// function getStorageValue(key, defaultValue) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;