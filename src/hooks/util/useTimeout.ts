import { useEffect, useRef } from "react";

interface Props {
  callback: () => void;
  ms: number;
}

const useTimeout = ({ callback, ms }: Props) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  const starter = () => {
    const id = window.setTimeout(callback, ms);

    return () => {
      window.clearTimeout(id);
    };
  };

  return {
    starter,
  };
};

export default useTimeout;
