import { useEffect, useState, useCallback } from 'react';
import { debounce } from '../utility/debounce';

const useResizeEvent = (callback) => {
  useEffect(() => {
    window.addEventListener('resize', callback);
    return () => {
      return window.removeEventListener('resize', callback);
    };
  }, [callback]);
};

export const useWindowResize = () => {
  const [height, setHeight] = useState('100vh');
  const handleResize = useCallback(() => {
    setHeight(window.innerHeight);
  });
  console.log(height);
  useResizeEvent(debounce(handleResize, 100));
  return height;
};
