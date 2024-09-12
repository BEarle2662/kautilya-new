const apiBasePath = "https://guprojects.gitam.edu/kautilya-admin/api/";

export const apisBasePath = {
  kautilyanowSlider: `${apiBasePath}kautilyanow_slider`, // home slider

  ourteamfounding: `${apiBasePath}fetch-ourteamfounding`, //About Page
  ourteamdean: `${apiBasePath}fetch-ourteamdean`,
  ourteamadvisory: `${apiBasePath}fetch-ourteamadvisory`,
  ourteam: `${apiBasePath}fetch-ourteam`,
  technicalsupport: `${apiBasePath}fetch-technicalsupport`,
  supportstaff: `${apiBasePath}fetch-supportstaff`,

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
};
