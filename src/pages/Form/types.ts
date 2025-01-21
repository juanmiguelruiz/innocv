export type InputId = 'username' | 'email' | 'password' | 'confirmPassword';

export type Input = {
  id: InputId;
  value: string;
  isValid: boolean;
  type: string;
  validate?: (value: string, secondValue?: string) => boolean;
};
