const apiBasePath = "https://guprojects.gitam.edu/kautilya-admin/api/";

//guprojects.gitam.edu/kautilya-admin/api/fetch-ksppteam

export const apisBasePath = {
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
};
