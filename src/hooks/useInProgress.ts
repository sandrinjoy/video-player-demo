import React, { useRef } from "react";

function useInProgress(initialState: boolean = false) {
  const inProgressRef = useRef(initialState);

  const setInProgress = (value: boolean) => {
    inProgressRef.current = value;
  };
  return [inProgressRef.current, setInProgress] as const;
}

export default useInProgress;
