export const getMaskedString = (string: string): string => {
  const lenght = string.length > 8 ? string.length - 8 : 0;
  const firstPart = string.slice(0, 4);
  const lastPart = string.slice(-4);

  return `${firstPart}(${lenght})${lastPart}`;
};
