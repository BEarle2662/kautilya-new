const apiBasePath = "https://guprojects.gitam.edu/kautilya-admin/api/";

const ksppApiBasePath = "https://guprojects.gitam.edu/KSPPCMS/api/";

//guprojects.gitam.edu/kautilya-admin/api/fetch-ksppteam

export const apisBasePath = {
  metatagsData: `${apiBasePath}title`, // Metatags

  kautilyanowSlider: `${apiBasePath}kautilyanow_slider`, // home slider

  ksppteam: `${apiBasePath}fetch-ksppteam`, // about Page

  faculty: `${apiBasePath}fetch-faculty`, // Faculty
  facultyBrief: `${apiBasePath}faculty-brief`,

  issuesBreifList: `${apiBasePath}issues-lists`, // issueBrief

  capstoneProjectsList: `${apiBasePath}cp-lists`, // capstone projects

  blogsList: `${apiBasePath}blog-lists`, // blogs

  alumniprofiles: `${apiBasePath}fetch-alumniprofiles`, // Alumni association
  savealumniassociation: `${apiBasePath}savealumniassociation`,

  faqdata: `${apiBasePath}fetch-faqdata`, // All Faqs (Accordian)

  publicationBanner: `${apiBasePath}fetch-publication-slider-data`, // Publications Academic associates
  publicationAcademicAssoData: `${apiBasePath}fetch-publication-tabs-data`,

  videosData: `${apiBasePath}fetch-videosdata`, // videos

  publicPolicies: `${apiBasePath}fetch-publicpolicies`, // public policies

  mentorsData: `${apiBasePath}fetch-mentorslist`, // mentors data
  mentorsTabsData: `${apiBasePath}fetch-mentors-tabs-data`,

  resourcesData: `${apiBasePath}fetch-resources-data`, // Events data

  placementsKcAdvnData: `${apiBasePath}fetch-placementsData`, // placement data

  studentMixData: `${apiBasePath}fetch-student-mix`, // student mix data

  masterProgramData: `${apiBasePath}fetch-master-program-data`, // student mix data
  masterProgramTabsData: `${apiBasePath}fetch-mpp-tabs-data`,

  facilityListdata: `${apiBasePath}fetch-facilitylistdata`, // facilites data
};

export const ksppApisBasePath = {
  homeSlider: `${ksppApiBasePath}fetch-homeslider`, // home slider
  homeIndiaByKc: `${ksppApiBasePath}fetch-indiaby-kautilya`,
  homeGitamGlance: `${ksppApiBasePath}fetch-gitam-glance`,
  homeAccRanking: `${ksppApiBasePath}fetch-accredations-rankings`,

  ourteam: `${ksppApiBasePath}fetch-ourteam`, // about Page

  faculty: `${ksppApiBasePath}fetch-faculty`, // Faculty
  facultyBrief: `${ksppApiBasePath}faculty-brief`,

  kcAdvnData: `${ksppApiBasePath}fetch-kautilya-advantage`, // kautilya advantage

  phdDoctoralTabs: `${ksppApiBasePath}fetch-doctoral-tabs`, // phd-doctoral-tabs

  mppTabs: `${ksppApiBasePath}fetch-mpp-tabs`, // mpp-tabs
  mppSliders: `${ksppApiBasePath}fetch-mppslider-data`, // mpp-tabs

  mentorsTabs: `${ksppApiBasePath}fetch-mentors-tabs-data`, // mentor - tabs
  mentorsData: `${ksppApiBasePath}fetch-mentors-list`, // mentor - images

  academicFaq: `${ksppApiBasePath}fetch-academics-faqdata`, // mentor - images

  cpLists: `${ksppApiBasePath}fetch-capstoneproject-lists`, // capstone projects List
  cpSlug: `${ksppApiBasePath}fetch-cp-brief`, // capstone projects slug

  issueBriefLists: `${ksppApiBasePath}fetch-issuebrief-lists`, // issue breif  List
  issueBriefSlug: `${ksppApiBasePath}fetch-issuebrief-brief`, // issue breif  List

  publicationBannerData: `${ksppApiBasePath}fetch-publication-banner-data`, // publication banner data
  publicationTabsData: `${ksppApiBasePath}fetch-publication-tabs-data`, // publication Tabs data

  researchFaqsApi: `${ksppApiBasePath}fetch-research-faqdata`, // research faq data

  studentMixApi: `${ksppApiBasePath}fetch-student-mix`, // student mix data

  phdDurationApi: `${ksppApiBasePath}fetch-phd-admissionprocess-tabs`, //  phd duration data

  partnershipApi: `${ksppApiBasePath}fetch-partnership-data`, //  partnership

  partnershipInnerPage_1_Api: `${ksppApiBasePath}fetch-partnership-brief/ie-universitys-school-of-politics`, //  partnership inner page 1

  partnershipInnerPage_2_Api: `${ksppApiBasePath}fetch-partnership-brief/united-nations-human-rights-council-unhrc`, //  partnership inner page 2

  admissionFaqApi: `${ksppApiBasePath}fetch-admission-faqdata`, //  admission faqs

  faciltiesDataApi: `${ksppApiBasePath}fetch-facility-data`, //  facilties data

  almuniProfileApi: `${ksppApiBasePath}fetch-alumni-profiles`, //  Alumni Profiles data

  studentClubApi: `${ksppApiBasePath}fetch-student-clubs`, //  students club data

  videoGalleryApi: `${ksppApiBasePath}fetch-video-gallery`, //  videos galllery data

  blogsListApi: `${ksppApiBasePath}fetch-blog-lists`, //  blogs data

  blogsListBriefApi: `${ksppApiBasePath}fetch-blog-brief`, //  blogs brief data

  eventsListApi: `${ksppApiBasePath}fetch-events-lists`, //  events List

  policiesGuideLines: `${ksppApiBasePath}fetch-policies-guidelines`, //  events List

  placementsApi: `${ksppApiBasePath}fetch-placements-data`, //  placements List
};
