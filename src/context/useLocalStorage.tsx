import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let value = localStorage.getItem(item)
    try {
      if (value) setValue(JSON.parse(value));
    } catch (error) {
      console.error("Parsing error on reading localStorage", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  }

  return {
    value,
    updateLocalStorage
  }
}