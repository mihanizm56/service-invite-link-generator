const WHITE_LIST = ['x-supplier-id'];

export const getFilteredCookies = (pureCookies: string) => {
  return pureCookies.replace(
    /([\w-_.]*)=([\w-_.]*)(;)?/g,
    (match, p1, p2, p3 = '') => {
      if (WHITE_LIST.includes(p1)) {
        return `${p1}=${p2}${p3}`;
      }

      const lenght = p2.length > 8 ? p2.length - 8 : 0;
      const firstPart = p2.slice(0, 4);
      const lastPart = p2.slice(-4);

      return `${p1}=${firstPart}(${lenght})${lastPart}${p3}`;
    },
  );
};
