import { LITERALS } from '@/constants';
import { useTheme } from '@/theme';

const ToggleTheme = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <span>{LITERALS.ToggleTheme[theme].title}</span>
      <button onClick={toggleTheme}>{LITERALS.ToggleTheme[theme].button}</button>
    </>
  );
};

export default ToggleTheme;
