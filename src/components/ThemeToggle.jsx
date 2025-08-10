import React from 'react'

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-md border hover:opacity-90"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}