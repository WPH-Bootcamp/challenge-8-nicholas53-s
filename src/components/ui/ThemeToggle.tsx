import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * ============================================================================
 * ThemeToggle Component
 * ============================================================================
 *
 * Tombol untuk switch antara dark dan light mode.
 *
 * Logic:
 * - Kalau theme sekarang LIGHT → tampilkan Moon (klik = ke dark)
 * - Kalau theme sekarang DARK  → tampilkan Sun  (klik = ke light)
 *
 * Aksesibilitas:
 * - `aria-label` describe action (bukan icon yang ditampilkan)
 * - `role` button implicit dari <button>
 * - Focus ring visible untuk keyboard user
 * ============================================================================
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'inline-flex items-center justify-center',
        'w-10 h-10 rounded-full',
        'transition-colors duration-200',
        // Light mode style
        'bg-surface-light text-text-light hover:bg-border-light',
        // Dark mode style
        'dark:bg-surface-dark dark:text-text-dark dark:hover:bg-border-dark',
        // Focus ring
        'focus:outline-none focus:ring-2 focus:ring-brand/50',
      ].join(' ')}
    >
      {/* Conditional render icon berdasarkan theme */}
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
