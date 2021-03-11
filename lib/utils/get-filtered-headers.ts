import { getMaskedString } from './get-masked-string';

const BLACK_LIST = ['Authorization'];

export const getFilteredHeaders = (
  pureheaders: Record<string, string>,
): Record<string, string> => {
  return Object.keys(pureheaders).reduce((acc, headerKey) => {
    const headerValue = pureheaders[headerKey];

    if (BLACK_LIST.includes(headerKey)) {
      const maskedString = getMaskedString(headerValue);

      return { ...acc, [headerKey]: maskedString };
    }

    return { ...acc, [headerKey]: headerValue };
  }, {});
};
