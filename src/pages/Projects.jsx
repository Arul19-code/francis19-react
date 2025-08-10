import React from 'react'

const items = new Array(3).fill(0).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`
}))

export default function Portfolio() {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(it => (
          <div
            key={it.id}
            className="rounded-md overflow-hidden border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
          >
            <div className="h-40 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`https://source.unsplash.com/collection/190727/400x300?sig=${it.id}`}
                alt={it.title}
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}