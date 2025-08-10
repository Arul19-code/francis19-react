import React from 'react'

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Hi, I’m Arul Francis</h1>
          <p className="mb-4">
            I am a Drupal developer with 8 years of experience specializing in module development, migrations, REST APIs, and third-party integrations.
          </p>
          <p className="mb-4">
            I have also worked extensively on Shopify site revamps and Shopify integrations. Currently, I am exploring AI technologies to expand my skill set.
          </p>
          <a
            href="/services"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            See Services
          </a>
        </div>

        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
          <img
            className="img-cover h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
            alt="Hero"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
          <h3 className="font-semibold mb-2">Drupal Module Development</h3>
          <p className="text-sm">Building custom Drupal modules tailored to client requirements.</p>
        </article>

        <article className="p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
          <h3 className="font-semibold mb-2">REST APIs</h3>
          <p className="text-sm">Skilled in leveraging REST APIs for seamless data migration across Drupal and third-party systems.</p>
        </article>

        <article className="p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
          <h3 className="font-semibold mb-2">Shopify Integration</h3>
          <p className="text-sm">Connecting Shopify with external systems and revamping Shopify sites.</p>
        </article>
      </div>
    </section>
  )
}