import { ChangeEvent, FormEvent, useState } from 'react';
import { LITERALS } from '@/constants';
import InputField from './InputField';
import { Input } from './types';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from './utils';
import './styles.css';

const initialInputState = {
  value: '',
  isValid: true,
};

const Form = (): JSX.Element => {
  // The status is enriched with important information on inputs,
  // error control is also unified in this status.
  const [inputs, setInputs] = useState<{ [key: string]: Input }>({
    username: {
      ...initialInputState,
      id: 'username',
      type: 'text',
      validate: validateUsername,
    },
    email: {
      ...initialInputState,
      id: 'email',
      type: 'email',
      validate: validateEmail,
    },
    password: {
      ...initialInputState,
      id: 'password',
      type: 'password',
      validate: validatePassword,
    },
    confirmPassword: {
      ...initialInputState,
      id: 'confirmPassword',
      type: 'password',
      validate: validateConfirmPassword,
    },
  });

  //In this function all fields are validated
  const validateInputs = (): boolean => {
    let allValid = true;
    const updatedInputs = { ...inputs }; // Copy inputs so as not to mutate them directly

    Object.entries({ ...inputs }).forEach(([, input]) => {
      if (input.validate) {
        input.isValid = input.validate(input.value, inputs.password?.value);
      }
      if (!input.isValid || !input.value) {
        allValid = false;
      }
    });

    setInputs(updatedInputs);
    return allValid;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedField = { ...inputs[name], value };

    setInputs(prev => ({ ...prev, [name]: updatedField }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateInputs()) {
      // eslint-disable-next-line no-console
      console.log(`${LITERALS.Form.success} ${inputs.username.value}`);
    }
  };
  // To reuse code we make the <InputField/> component which renders
  // an input depending on the props defined in the state, so we make our code more DRY
  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(inputs).map(([inputName, input]) => {
        const { id, type, value, isValid } = input;
        return (
          <InputField
            key={id}
            id={id}
            name={inputName}
            type={type}
            value={value}
            isValid={isValid}
            onChange={handleChange}
          />
        );
      })}
      <button type="submit">{LITERALS.Form.cta}</button>
    </form>
  );
};

export default Form;
