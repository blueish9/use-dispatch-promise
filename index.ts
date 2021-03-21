import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

const useDispatchPromise = () => {
  const dispatch = useDispatch();
  return useCallback(
    <T>(action: AnyAction) => {
      let callback;
      const promise = new Promise<T>(resolve => (callback = resolve));
      const resolve = (...args: any) => callback(...args);
      dispatch({ ...action, resolve });
      return promise;
    },
    [dispatch],
  );
};

export interface ActionWithResolve<T = any> extends AnyAction {
  resolve: (value?: T | PromiseLike<T>) => void;
}

export default useDispatchPromise
