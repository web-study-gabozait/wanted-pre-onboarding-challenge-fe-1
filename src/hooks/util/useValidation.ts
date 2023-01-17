import { useRef } from "react";

const useValidation = () => {
  const isValid = useRef<boolean>(false);
  const breakIdx = useRef<number | null>(null);

  const validator = (conditions: boolean[]): void => {
    let isCheck = false;

    isValid.current = conditions.every((condition, i) => {
      if (condition && !isCheck) {
        breakIdx.current = i;
        isCheck = true;
      }

      return !condition;
    });
  };

  const getValidateResult = () => ({
    isValid: isValid.current,
    breakIdx: breakIdx.current,
  });

  return {
    validator,
    getValidateResult,
  };
};

export default useValidation;
