export const validateUsername = (value: string): boolean => !!value;

// Mail validation has been improved
export const validateEmail = (value: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

// Password validation could be improved by making it more robust
// -> const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const validatePassword = (value: string): boolean => value.length >= 8;

export const validateConfirmPassword = (confirmPassword: string, password?: string): boolean =>
  password === confirmPassword && !!confirmPassword.length;
