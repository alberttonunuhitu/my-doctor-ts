import {useState} from 'react';

// type Dispatch<A> = (value: A) => void;
// type SetStateAction<S> = S | ((prevState: S) => S);

// function useForm<S>(
//   initialState: S | (() => S),
// ): [S, Dispatch<SetStateAction<S>>];

export const useForm = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (params: string) => {
      return setValue(params);
    },
  ];
};
