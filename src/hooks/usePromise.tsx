import { useState, useEffect } from 'react';

interface Response {
  value: any;
  error: any;
  isPending: boolean;
}

const usePromise = (promiseFn: () => Promise<any>, deps: Array<any>) => {
  const [state, setState] = useState<Response>({
    value: null,
    error: null,
    isPending: false,
  });

  useEffect(() => {
    setState({ value: null, error: null, isPending: true });
    let mounted = true;
    const doAsync = async () => {
      try {
        const result = await promiseFn();
        if (mounted) {
          setState({ value: result, error: null, isPending: false });
        }
      } catch (e) {
        if (mounted) {
          setState({ value: null, error: e, isPending: false });
        }
      }
    };
    doAsync();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};

export default usePromise;
