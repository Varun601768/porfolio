export type ThemeType = 'light' | 'dark';

export const getInitialTheme = (): ThemeType => {
  // Check if theme is stored in localStorage
  const savedTheme = localStorage.getItem('theme') as ThemeType | null;
  
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check browser preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

export const setThemeClass = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const saveTheme = (theme: ThemeType) => {
  localStorage.setItem('theme', theme);
};