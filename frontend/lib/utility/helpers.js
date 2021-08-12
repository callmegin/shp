export const isObjEmpty = (obj) => {
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length === 0;
};

export const typesFromQuery = (qType) => {
  return qType.includes('|') ? qType.split('|') : [qType];
};

export const isBrowser = typeof window !== 'undefined';

export const overallRating = (reviews) =>
  Math.round(
    (reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length) *
      2
  ) / 2;
