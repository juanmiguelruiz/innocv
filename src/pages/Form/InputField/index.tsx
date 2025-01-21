import { LITERALS } from '@/constants';
import { InputFieldProps } from './types';

const InputField = ({
  id,
  value,
  type,
  onChange,
  isValid,
  ...rest
}: InputFieldProps): JSX.Element => (
  <div>
    <div className="form__input">
      <label htmlFor={id}>{LITERALS.Form.inputs?.[id].label}:</label>
      <input id={id} type={type} value={value} onChange={onChange} {...rest} />
    </div>
    <span className={`form__input--${!isValid ? 'error' : 'valid'}`}>
      {LITERALS.Form.inputs?.[id].errorMsg}
    </span>
  </div>
);

export default InputField;
