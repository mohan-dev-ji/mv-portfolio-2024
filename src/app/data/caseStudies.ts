export const caseStudies = [
    {
      slug: 'case-study-1',
      title: 'First Case Study',
      shortDescription: 'Brief overview of the first case study',
      thumbnail: '/images/case1-thumb.jpg',  // We'll handle images later
      tags: ['UX Design', 'React'],
      // Add any other fields you need
    },
    // Add more case studies as needed
  ] as const
  
  export type CaseStudy = typeof caseStudies[number]