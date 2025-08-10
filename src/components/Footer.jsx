import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} MySite — Placeholder copyright.
      </div>
    </footer>
  )
}