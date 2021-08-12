import { useRef, useEffect, useCallback } from 'react';
import _ from 'lodash';

import { isBrowser } from './helpers';

export const isBottom = (ref, isInfinite) => {
  if (!ref.current) return false;
  if (isInfinite)
    return (
      ref.current.getBoundingClientRect().bottom - 100 < window.innerHeight
    );
  return ref.current.getBoundingClientRect().bottom < window.innerHeight;
};

const useOnScrollEvent = (callback) => {
  useEffect(() => {
    isBrowser && document.addEventListener('scroll', callback);
    return () => document.removeEventListener('scroll', callback);
  }, [callback]);
};

const InfiniteScroll = ({
  children,
  hasNextPage,
  reachedBot,
  loading,
  isInfinite = true,
  loadOnMount = false,
}) => {
  const elementRef = useRef();
  const invokeReachedBot = () => {
    if (
      isInfinite &&
      !loading &&
      hasNextPage &&
      isBottom(elementRef, isInfinite)
    ) {
      reachedBot();
    } else if (!isInfinite && isBottom(elementRef)) {
      reachedBot();
    }
  };

  useEffect(() => {
    loadOnMount && isBottom(elementRef) && reachedBot();
  }, []);

  useOnScrollEvent(_.throttle(invokeReachedBot, 500));

  return (
    <>
      {children}
      <div ref={elementRef}></div>
    </>
  );
};

export default InfiniteScroll;
