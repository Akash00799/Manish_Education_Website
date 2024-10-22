export const formatPrice = (price) => {
  if (price === undefined || price === null) {
    return "$0.00";
  }
  return `$${price.toFixed(2)}`;
};
