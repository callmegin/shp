import { GET_PRODUCTS_BY_CATEGORY } from 'components/containers/Products/Products';

const infiniteScroll = () => ({
  keyArgs: false,
  read(existing, { args, cache }) {
    return existing ? existing[args.category] : existing;
  },
  merge(existing, incoming, { args }) {
    if (existing) {
      if (Object.keys(existing).includes(args.category)) {
        const existingCopy = { ...existing };

        const updated = {
          ...existingCopy[args.category],
          edges: [...existingCopy[args.category].edges, ...incoming.edges],
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

export default infiniteScroll;
