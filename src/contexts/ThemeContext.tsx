import { createContext, useEffect, useState, type ReactNode } from 'react';
import type { Theme, ThemeContextValue } from '../types';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Key untuk localStorage. Pakai constant supaya nggak salah ketik nama.
 */
const STORAGE_KEY = 'company-profile-theme';

/**
 * Helper: baca initial theme dari localStorage.
 * Ini berjalan SEKALI saat app pertama kali load.
 *
 * Kenapa pakai function lazy initializer `useState(() => ...)` ?
 * → Tanpa lazy, expression jalan setiap re-render (boros).
 * → Dengan lazy, function cuma jalan saat mount pertama.
 */
function getInitialTheme(): Theme {
  // Guard: di SSR environment, `window` tidak ada
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage bisa fail (private mode di browser tertentu) — silently fallback
  }

  return 'light'; // default
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // State theme dengan lazy initial value
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  /**
   * Side effect: sync theme ke <html> class dan localStorage
   * setiap kali theme berubah.
   *
   * useEffect dengan dependency [theme] artinya:
   * "Jalankan fungsi ini SETIAP kali nilai `theme` berubah"
   */
  useEffect(() => {
    const root = document.documentElement; // ini element <html>

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage errors
    }
  }, [theme]);

  /**
   * Helper functions yang di-expose ke consumer.
   * Pattern: bungkus setThemeState dengan API yang lebih semantic.
   */
  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  /**
   * Value yang dikirim ke semua consumer.
   * Object literal ini akan re-create setiap render — untuk app kecil
   * tidak masalah. Kalau perlu optimize: pakai useMemo.
   */
  const value: ThemeContextValue = { theme, toggleTheme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
