import Skeleton from 'components/ui/Skeleton/Skeleton';
import React, { useRef, useEffect } from 'react';

import _ from 'lodash';

const isBrowser = typeof window !== 'undefined';

const isBottom = (ref) => {
  if (!ref.current) return false;
  return ref.current.getBoundingClientRect().bottom < window.innerHeight;
};

const useOnScrollEvent = (callback) => {
  useEffect(() => {
    isBrowser && document.addEventListener('scroll', callback);
    return () => document.removeEventListener('scroll', callback);
  }, [callback]);
};

const InfiniteScroll = ({ children, hasNextPage, reachedBot, loading }) => {
  const elementRef = useRef();

  let tst = '';
  const invokeReachedBot = () => {
    if (!loading && hasNextPage && isBottom(elementRef)) {
      reachedBot();
    }
  };

  useOnScrollEvent(_.debounce(invokeReachedBot, 200));

  return (
    <>
      {children}
      <div ref={elementRef}>{hasNextPage ? '...' : ''}</div>
    </>
  );
};

export default InfiniteScroll;
