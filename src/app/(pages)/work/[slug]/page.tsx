import { caseStudies } from '@/app/data/caseStudies'
import { notFound } from 'next/navigation'

export default async function CaseStudy({
  params,
}: {
  params: { slug: string }
}) {
  const study = caseStudies.find((study) => study.slug === params.slug)
  
  if (!study) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
      <p className="text-xl mb-8">{study.shortDescription}</p>
    </article>
  )
}