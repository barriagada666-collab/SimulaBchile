import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY_THEME = 'conaset_theme';

export function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_THEME) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'system';
}

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = mode === 'dark' || (mode === 'system' && systemPrefersDark);

  if (isDark) {
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  }
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Aplicar tema al cambiar
  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Escuchar cambios de preferencia del sistema si el modo es "system"
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelectTheme = (mode: ThemeMode) => {
    setTheme(mode);
    setIsOpen(false);
  };

  const getActiveIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4 text-amber-400" />;
    if (theme === 'dark') return <Moon className="w-4 h-4 text-blue-300" />;
    return <Monitor className="w-4 h-4 text-slate-300" />;
  };

  const getThemeTitle = () => {
    if (theme === 'light') return 'Tema actual: Claro';
    if (theme === 'dark') return 'Tema actual: Oscuro';
    return 'Tema actual: Automático (Sistema)';
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Botón Principal del Selector */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        title={getThemeTitle()}
        aria-label={getThemeTitle()}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {getActiveIcon()}
        <span className="hidden sm:inline-block text-xs font-semibold text-slate-200">
          {theme === 'light' ? 'Claro' : theme === 'dark' ? 'Oscuro' : 'Auto'}
        </span>
      </button>

      {/* Menú Desplegable Accesible */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-900 border border-slate-700 shadow-xl py-1.5 z-50 animate-fade-in text-xs font-medium text-slate-200 focus:outline-none"
        >
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
            Apariencia Visual
          </div>

          <button
            type="button"
            role="menuitemradio"
            aria-checked={theme === 'light'}
            onClick={() => handleSelectTheme('light')}
            className={`w-full px-3 py-2 flex items-center justify-between transition-colors hover:bg-slate-800 text-left ${
              theme === 'light' ? 'text-blue-400 font-bold bg-slate-800/60' : 'text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Tema Claro</span>
            </div>
            {theme === 'light' && <Check className="w-3.5 h-3.5 text-blue-400" />}
          </button>

          <button
            type="button"
            role="menuitemradio"
            aria-checked={theme === 'dark'}
            onClick={() => handleSelectTheme('dark')}
            className={`w-full px-3 py-2 flex items-center justify-between transition-colors hover:bg-slate-800 text-left ${
              theme === 'dark' ? 'text-blue-400 font-bold bg-slate-800/60' : 'text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-blue-400" />
              <span>Tema Oscuro</span>
            </div>
            {theme === 'dark' && <Check className="w-3.5 h-3.5 text-blue-400" />}
          </button>

          <button
            type="button"
            role="menuitemradio"
            aria-checked={theme === 'system'}
            onClick={() => handleSelectTheme('system')}
            className={`w-full px-3 py-2 flex items-center justify-between transition-colors hover:bg-slate-800 text-left ${
              theme === 'system' ? 'text-blue-400 font-bold bg-slate-800/60' : 'text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-slate-400" />
              <span>Automático (SO)</span>
            </div>
            {theme === 'system' && <Check className="w-3.5 h-3.5 text-blue-400" />}
          </button>
        </div>
      )}
    </div>
  );
};
