import { GET_PRODUCTS_BY_CATEGORY } from 'components/containers/Products/Products';

const infiniteScrollCache = () => ({
  keyArgs: ['sortBy', 'type'],
  read(existing, { args, cache }) {
    return existing ? existing[args.category] : existing;
  },
  merge(existing, incoming, { args, cache, readField }) {
    // console.log(existing);

    if (existing) {
      if (Object.keys(existing).includes(args.category)) {
        const existingCopy = { ...existing };

        const updated = {
          ...existingCopy[args.category],
          edges: removeDuplicates([
            ...existingCopy[args.category].edges,
            ...incoming.edges,
          ]),
          pageInfo: incoming.pageInfo,
        };

        existingCopy[args.category] = updated;
        return existingCopy;
      }
    }
    const merged = {
      ...existing,
      [args.category]: incoming,
    };

    return merged;
  },
});

export default infiniteScrollCache;

//! TODO: move somewhere else
const removeDuplicates = (data) => {
  const unique = new Set();
  const filtered = data.filter((el) => {
    const duplicate = unique.has(el.node.__ref);
    unique.add(el.node.__ref);
    return !duplicate;
  });
  return filtered;
};
