import FullwidthSlider from '@/components/common/fullWidthSlider';
import MainLayout from '@/components/MainContainer/MainLayout';
import ScreenWidth from '@/components/MainContainer/ScreenWidth';
import axios from 'axios';
import React from 'react';

const StudyAtKautilya = ({ kautilyaAdvantageBanner }) => {
  return (
    <>
      <MainLayout>
        <h1 className="text-5xl text-center text-white bg-primary mb-4 py-16">
          LEARN FROM THE BEST
        </h1>
        <ScreenWidth layoutwidth="true">
          <div className="p-12">
            <p className="text-lg mb-16">
              We’ve brought in the finest educators and influencers to set you
              up for success with one of the <b>best public policy curriculum</b> 
              at one of the top public policy schools in India. The academics at 
              Kautilya are strengthened by faculties comprising a mix of <b>
                experienced research scholars and practitioners from eminent 
                institutions like UN, IIM, Harvard, etc.,
              </b> and from areas like Economics, Public Policy, Political Science, 
              Statistics, Ethics, Leadership, and more.
            </p>
            <FullwidthSlider slider={kautilyaAdvantageBanner} />
            <p className="text-lg mt-8">
              Experienced Faculties, Acclaimed Mentors, Experiential Learning, 
              industry-mapped curriculum, Learner-Centric Pedagogy, 
              Simulation-based Knowledge Sharing, Delightful Campus Life, and 
              Career Development Support are key reasons students choose to 
              pursue higher education at Kautilya.
            </p>
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-placementsData');
  const studentAtKautilyaData = response.data.data;
  const kautilyaAdvantageBanner = studentAtKautilyaData.filter(each => each.category === 'study-at-kautilya');

  return {
    props: {
      kautilyaAdvantageBanner,
    },
  };
};

export default StudyAtKautilya;
