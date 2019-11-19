import { useState } from 'react';
import * as Cookies from 'js-cookie';

/**
 * Daren's wonderful useCookie hook STOLEN FROM HVW :laughing-crying-open-eyes:
 * @param  {String} key           The key for which the cookie hook will work
 * @param  {String} initialValue  The value with which to initialise the cookie if it doesn't already exist
 * @return {Array}                A hook containing the current cookie item, and a handler to change it
 */
export default (key, initialValue) => {
  const [item, setInnerValue] = useState(() => Cookies.get(key) || initialValue);

  const setValue = (value, options) => {
    setInnerValue(value);
    Cookies.set(key, value, options);
  };

  return [item, setValue];
};
