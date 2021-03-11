import { getMaskedString } from './get-masked-string';

const WHITE_LIST = ['x-supplier-id'];

export const getFilteredCookies = (pureCookies: string) => {
  return pureCookies.replace(
    /([\w-_.]*)=([\w-_.]*)(;)?/g,
    (match, p1, p2, p3 = '') => {
      if (WHITE_LIST.includes(p1)) {
        return `${p1}=${p2}${p3}`;
      }

      const maskedString = getMaskedString(p2);

      return `${p1}=${maskedString}${p3}`;
    },
  );
};
