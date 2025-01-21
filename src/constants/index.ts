export const ROUTES = {
  HOME: '/',
  TODO_LIST: 'todo-list',
  TOGGLE_THEME: 'toggle-theme',
  FORM: 'form',
  CONTROLLED_FORM: 'controlled-form',
};

export const LITERALS = {
  Home: {
    exercise1: 'Exercise 1 - TodoList',
    exercise2: 'Exercise 2 - Theme Context',
    exercise3: 'Exercise 3 - Form',
    exercise3_controlled: 'Exercise 3 - Form (Controlled Inputs)',
    back: 'Back',
  },
  TodoList: {
    input: {
      placeholder: 'Add new task',
    },
    button: 'Add task',
  },
  ToggleTheme: {
    light: {
      title: 'Light mode is active',
      button: 'Dark mode',
    },
    dark: {
      title: 'Dark mode is active',
      button: 'Light mode',
    },
  },
  Form: {
    inputs: {
      username: { label: 'Username', errorMsg: 'Username is required' },
      email: { label: 'Email', errorMsg: 'Email is invalid' },
      password: { label: 'Password', errorMsg: 'Password is too short' },
      confirmPassword: { label: 'Confirm Password', errorMsg: 'Passwords do not match' },
    },
    cta: 'Register',
    success: 'Registration successful!',
  },
};
