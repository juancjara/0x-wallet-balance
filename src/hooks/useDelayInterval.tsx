import { useEffect, useState } from 'react';

interface Response {
  value: any;
  error: any;
  isPending: boolean;
}

const useDelayInterval = (
  promiseFn: () => Promise<any>,
  ms: number,
  deps: Array<any>
) => {
  const [state, setState] = useState<Response>({
    value: null,
    error: null,
    isPending: true,
  });
  useEffect(() => {
    let mounted = true;
    let timeout: any = null;

    //isPending will only be true on the first call so we doesn't show the loader on each fetch
    const doAsync = async () => {
      try {
        const result = await promiseFn();
        if (mounted) {
          setState({ value: result, error: null, isPending: false });
          timeout = setTimeout(doAsync, ms);
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
      clearTimeout(timeout);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms, ...deps]);

  return state;
};

export default useDelayInterval;
