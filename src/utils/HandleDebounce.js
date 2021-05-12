import { useCallback } from "react";
import { searchCustomerRecords } from "../services/services";

export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
export const debounceOnChange = useCallback(debounce(onChange, 3000), []);

export function onChange(text) {
  searchCustomerRecords(text)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}
