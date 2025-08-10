import React from 'react'

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Use the form below to get in touch (placeholder only).</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700" rows="5" placeholder="Your message" />
        </div>
        <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send (placeholder)</button>
      </form>
    </section>
  )
}