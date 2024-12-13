export interface NavItem {
  label: string;
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: 'Work', sectionId: 'work' },
  { label: 'About', sectionId: 'about' },
  { label: 'Values', sectionId: 'values' },
  { label: 'Contact', sectionId: 'contact' },
];



  // export const navItems = [
  //   { label: 'Home', path: '/' },
  //   { label: 'Work', path: '/work' },
  //   { label: 'About', path: '/about' },
  //   { label: 'Contact', path: '/contact' }
  // ] as const