import { useRef, useEffect, useCallback } from 'react';
import _ from 'lodash';

const isBrowser = typeof window !== 'undefined';

const isBottom = (ref) => {
  if (!ref.current) return false;

  return ref.current.getBoundingClientRect().bottom - 100 < window.innerHeight;
};

const useOnScrollEvent = (callback) => {
  useEffect(() => {
    isBrowser && document.addEventListener('scroll', callback);
    return () => document.removeEventListener('scroll', callback);
  }, [callback]);
};

const InfiniteScroll = ({ children, hasNextPage, reachedBot, loading }) => {
  const elementRef = useRef();
  const invokeReachedBot = () => {
    console.log(window.innerHeight);
    console.log(elementRef.current.getBoundingClientRect());
    if (!loading && hasNextPage && isBottom(elementRef)) {
      reachedBot();
    }
  };

  useOnScrollEvent(_.throttle(invokeReachedBot, 500));

  return (
    <>
      {children}
      <div ref={elementRef}></div>
    </>
  );
};

export default InfiniteScroll;
