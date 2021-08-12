import router from 'next/router';
import { typesFromQuery } from './helpers';

const routerPush = (queryParams, slug) => {
  router.push(
    {
      pathname: slug,
      query: queryParams,
    },
    undefined,
    { shallow: true }
  );
};

const addSortQuery = (param, { type: qType }) => {
  let queryParams = {};
  if (param) queryParams = { sort: param };
  if (qType) queryParams = { ...queryParams, type: qType };
  return queryParams;
};

const addTypeQuery = (param, { sort: qSort, type: qType }) => {
  let queryParams = {};

  if (qSort) queryParams = { sort: qSort };
  return (queryParams = {
    ...queryParams,
    type: qType ? `${qType}|${param}` : param,
  });
};

const removeTypeQuery = (typeParam, { sort: qSort, type: qType }) => {
  let queryParams = {};
  let array = qType.includes('|') ? qType.split('|') : [typeParam];
  const index = array.indexOf(typeParam);
  index > -1 && array.splice(index, 1);
  if (array.length > 0)
    array = array.reduce((acc, curVal) => `${acc}|${curVal}`);
  if (qSort) queryParams = { sort: qSort };
  return (queryParams = {
    ...queryParams,
    type: array,
  });
};

export const removeQueryParams = (typeParam, query) => {
  const queryParams = removeTypeQuery(typeParam, query);
  routerPush(queryParams, query.slug);
};

export const addQueryParams = (paramToAdd, query) => {
  const { sort, type } = paramToAdd;
  let queryParams = {};
  if (sort !== undefined) queryParams = addSortQuery(sort, query);
  if (type !== undefined) queryParams = addTypeQuery(type, query);
  routerPush(queryParams, query.slug);
};

export const resolveSorting = (sort) => {
  if (!sort) return {};
  const [field, order] = sort.split('-');
  return { field: field, order: order };
};
