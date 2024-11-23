import { caseStudies } from '@/app/data/caseStudies'

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Work</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {caseStudies.map((study) => (
          <div 
            key={study.slug}
            className="block p-6 border rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
            <p>{study.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}