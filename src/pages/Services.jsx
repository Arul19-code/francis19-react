import React from 'react'

export default function Services() {
  const services = [
    { title: 'Web Development', desc: 'Responsive websites, SPAs and PWAs' },
    { title: 'Design', desc: 'UI/UX, branding and visual design' },
    { title: 'Consulting', desc: 'Architecture, performance & accessibility' },
  ]

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map(s => (
          <div key={s.title} className="p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}