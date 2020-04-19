import { useState, ChangeEvent } from "react";

export const useFormFields = (initialState: any) => {
  const [fields, setValues] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues({ ...fields, [event.target.name]: event.target.value });
  };

  const resetValues = () => {
    setValues({ ...initialState });
  };

  return [fields, handleChange, resetValues];
};
