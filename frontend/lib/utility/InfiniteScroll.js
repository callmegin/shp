import { useRef, useEffect } from 'react';
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

  const invokeReachedBot = () => {
    if (!loading && hasNextPage && isBottom(elementRef)) {
      reachedBot();
    }
  };

  useOnScrollEvent(_.debounce(invokeReachedBot, 200));

  return (
    <>
      {children}
      <div ref={elementRef}></div>
    </>
  );
};

export default InfiniteScroll;
