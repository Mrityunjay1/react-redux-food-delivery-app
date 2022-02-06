import { CURRENCY } from './constant';

export const getFormattedPrice = (price = 0, precision = 2) =>
  `${CURRENCY} ${price.toFixed(precision)}`;

export const getQueryStringValue = (url, search) => {
  const params = new URLSearchParams(url);
  return params.get(search);
};
export const getFormattedTopping = (topping) => topping.split('_').join(' ');
