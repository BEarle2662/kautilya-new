export const navLinks = [
  { id: 1, label: "Our team", href: "/about", mainNavItem: true },
  {
    id: 2,
    label: "Academics",
    dropdown: true,
    href: "#",
    mainNavItem: true,
    dropdownItems: [
      { id: 21, label: "Kautilya Advantage", href: "/study-at-kautilya" },
      { id: 22, label: "Faculty", href: "/our-faculty" },
      {
        id: 23,
        label: "Academic programs",
        dropdown: true,
        dropdownItems: [
          {
            id: 231,
            label: "Doctoral Program",
            href: "/doctoral-ph-d-duration",
          },
          { id: 232, label: "Master’s Program", href: "/mpp" },
        ],
      },
      { id: 24, label: "Mentorship @ kautilya", href: "/mentorship-program" },
      { id: 25, label: "Academic Calendar", href: "/academic-calendar" },
      { id: 26, label: "Academic FAQS", href: "/academics-faqs" },
    ],
  },
  {
    id: 3,
    label: "Research",
    dropdown: true,
    href: "#",
    mainNavItem: true,
    dropdownItems: [
      { id: 31, label: "Research Areas", href: "/research" },
      { id: 32, label: "Grants & Funding", href: "/research-projects" },
      { id: 33, label: "Capstone Project", href: "/capstone-project" },
      { id: 34, label: "Issue brief", href: "/issue-brief" },
      {
        id: 35,
        label: "Publications",
        dropdown: true,
        dropdownItems: [
          { id: 351, label: "Faculties", href: "/publications" },
          {
            id: 352,
            label: "Academic Associates",
            href: "/publications-academic-associates",
          },
        ],
      },
      { id: 36, label: "Research FAQs", href: "/research-faqs" },
    ],
  },
  {
    id: 4,
    label: "Admissions",
    dropdown: true,
    href: "#",
    mainNavItem: true,
    dropdownItems: [
      // { id: 41, label: 'Virtual Tour', href: '/campus-virtual-tour' },
      { id: 42, label: "Student Mix @ Kautilya", href: "/student-mix" },
      {
        id: 43,
        label: "Admission Process",
        dropdown: true,
        dropdownItems: [
          { id: 431, label: "Ph.D. Program", href: "/ph-d-duration" },
          { id: 432, label: "Master’s Program", href: "/admission-process" },
        ],
      },
      { id: 44, label: "Partnerships", href: "/partnership" },
      { id: 45, label: "Financial Aid", href: "/scholarships-financial-aid" },
      { id: 46, label: "Admissions FAQs", href: "/admissions-faqs" },
    ],
  },
  {
    id: 6,
    label: "Beyond academics",
    dropdown: true,
    mainNavItem: true,
    dropdownItems: [
      { id: 61, label: "Facilities", href: "/campus" },
      { id: 62, label: "Alumni Network", href: "/alumni-association" },
      { id: 63, label: "Student Clubs", href: "/student-clubs" },
      {
        id: 64,
        label: "Resources",
        dropdown: true,
        dropdownItems: [
          { id: 641, label: "Library", href: "/library" },
          { id: 642, label: "blog", href: "/blogs" },
          {
            id: 643,
            label: "Podcast Resource List",
            href: "/resource-list-of-podcasts",
          },
          { id: 644, label: "Events", href: "/resources" },
        ],
      },
      { id: 65, label: "Video Gallery", href: "/videos" },
      { id: 66, label: "Policies & Guidelines", href: "/kspp-policies" },
    ],
  },
  { id: 5, label: "Placements", href: "/placements", mainNavItem: true },

  // {
  //   id: 7,
  //   label: 'Work @ kautilya', href: '/careers',mainNavItem:true,
  // },
  // { id: 8, label: 'Contact', href: '/contactus',mainNavItem:true, },
  {
    id: 9,
    label: "Colloquy",
    href: "/kautilya-colloquy-2024",
    mainNavItem: true,
  },
];
