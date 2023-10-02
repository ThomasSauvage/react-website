import { Dispatch, SetStateAction, useEffect, useState } from "react";

/**
 * Hook equivalent to useState but keeps the value in localStorage
 * resetValue function is provided to reset the value to the default value
 *
 * Security remark: The value can be accessed by any user of the browser
 *
 * @param defaultValue Used if no value is stored in localStorage
 * @param stateKey Unique key identifying the value in localStorage
 */
export const usePersistentState = <T>(
  defaultValue: T,
  stateKey: string
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const storedValue = window.localStorage.getItem(stateKey);

  const [value, setValue] = useState(
    storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(stateKey, JSON.stringify(value));
  }, [value, stateKey]);

  const resetValue = (): void => {
    setValue(defaultValue);
  };

  return [value, setValue, resetValue];
};
