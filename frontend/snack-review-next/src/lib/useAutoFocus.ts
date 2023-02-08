import { useEffect, useRef } from "react";

export const useAutoFocus = <RefType extends HTMLElement>() => {
  const inputRef = useRef<RefType>(null);

  useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, []);

  return inputRef;
};
