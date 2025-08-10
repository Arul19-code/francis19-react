import React from 'react'
import knightImage from '../assets/images/knight.jpg'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
          <img className="img-cover h-full w-full" src={knightImage} alt="Team" />
        </div>
        <div>
          <p>Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </div>
      </div>
    </section>
  )
}