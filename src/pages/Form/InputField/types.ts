import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { InputId } from '../types';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: InputId;
  type: HTMLInputTypeAttribute;
  isValid: boolean;
}
