import { useRef } from 'react';
import { equal as isEqual } from '@wry/equality';

export function useDeepMemo(
  memoFn,
  key
) {
  const ref = useRef();

  if (!ref.current || !isEqual(key, ref.current.key)) {
    ref.current = { key, value: memoFn() };
  }

  return ref.current.value;
}
