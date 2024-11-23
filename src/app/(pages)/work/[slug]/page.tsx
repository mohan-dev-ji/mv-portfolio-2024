import { caseStudies } from '@/app/data/caseStudies'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = caseStudies.find((study) => study.slug === params.slug)
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.title} | Mo's Portfolio`,
    description: study.shortDescription,
  }
}

type PageProps = {
  params: { slug: string }
}

export default function CaseStudy({
  params,
}: PageProps) {
  const study = caseStudies.find((study) => study.slug === params.slug)
  
  if (!study) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
      <p className="text-xl mb-8">{study.shortDescription}</p>
      {/* We'll add more detailed case study content later */}
    </article>
  )
}

// This generates the static paths at build time
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}