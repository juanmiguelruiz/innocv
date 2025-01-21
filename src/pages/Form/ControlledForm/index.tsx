import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { LITERALS } from '@/constants';
import InputField from '../InputField';
import { Input } from '../types';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils';

const initialInputState = {
  value: '',
  isValid: true,
};

// In addition to the improvements discussed in the previous version of the exercise,
// here we have added validation when typing in the input, making it more dynamic.
const ControlledForm = (): JSX.Element => {
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

  const isFormValid = useMemo(
    () => Object.keys(inputs).every(input => inputs[input].isValid && inputs[input].value),
    [inputs]
  );

  const validateInput = (input: Input): void => {
    const validate = input?.validate;

    if (validate && input.id === 'password') {
      setInputs(prev => ({
        ...prev,
        confirmPassword: {
          ...prev.confirmPassword,
          isValid: validateConfirmPassword(inputs.confirmPassword.value, input.value),
        },
      }));
    }

    if (validate) {
      const isValid = validate(input.value, inputs.password.value);
      setInputs(prev => ({
        ...prev,
        [input.id]: {
          ...prev[input.id],
          isValid,
        },
      }));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedField = { ...inputs[name], value };

    setInputs(prev => ({ ...prev, [name]: updatedField }));
    validateInput(updatedField);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      // eslint-disable-next-line no-console
      console.log(`${LITERALS.Form.success} ${inputs.username.value}`);
    }
  };

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
      <button disabled={!isFormValid} type="submit">
        {LITERALS.Form.cta}
      </button>
    </form>
  );
};

export default ControlledForm;
