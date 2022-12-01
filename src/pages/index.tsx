import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import MainBackground from '../components/MainBackground';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <MainBackground />
        <div className='flex justify-center'>
          <div className='lg:px-12 px-6 py-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 md:w-9/12 w-full'>
            <div>
              <h2 className='font-semibold text-3xl mb-2'>About</h2>
              <div className='px-4 py-4'>
                <p>
                  My name is Eduardo Mejia. I&apos;m a front-end developer. The
                  technologies I have used as a front-end developer are HTML,
                  CSS, Javascript, React and Typescript.I have experience
                  working as a Spanish translator and technical support agent. I
                  love learning something new every day and I am open to explore
                  new areas of knowledge. I am looking for an opportunity to
                  further develop my skills and to utilize the ones I have
                  acquired through my education and work experience.
                </p>
              </div>
            </div>
            <hr className='my-6 border-gray-300' />
            <div>
              <h2 className='font-semibold text-3xl mb-2'>Education</h2>
              <div className='px-4 py-4'>
                <p>High School Complejo Educativo Rio Zarco | 2012 - 2013</p>
                <p>Technical Software Operator Course ITC | 2010 - 2011</p>
              </div>
            </div>
            <hr className='my-6 border-gray-300' />
            <div>
              <h2 className='font-semibold text-3xl mb-2'>Experience</h2>
              <div className='px-4 py-4'>
                <div className='py-2'>
                  <p>SPANISH TRANSLATOR</p>
                  <p>NaTakallam | June 2019 - May 2022</p>
                </div>
                <div className='ml-6'>
                  <ul style={{ listStyleType: 'circle' }}>
                    <li>
                      Translated more than 100,000 words in the areas of
                      education, finance and marketing.
                    </li>
                    <li>
                      Use of CAT tools to streamline the translation, editing
                      andproofreading process.
                    </li>
                    <li>
                      Helping to break down language barriers by translating
                      resources and documents for international aid programs.
                    </li>
                    <li>Worked on voice-over and transcription projects.</li>
                  </ul>
                </div>
              </div>
              <div className='px-4 py-4'>
                <div className='py-2'>
                  <p>TECHNICAL SUPPORT AGENT</p>
                  <p>OneLink | Jan 2017 - Dec 2017</p>
                </div>
                <div className='ml-6'>
                  <ul style={{ listStyleType: 'circle' }}>
                    <li>
                    Interact with customers to provide information in response to inquiries and requests about products and services.
                    </li>
                    <li>
                    Diagnose and resolve technical and software issues with customers&apos; Internet, cable or telephone.
                    </li>
                    <li>
                    Escalate cases to the technical area to solve hardware issues locatedin customers&apos; households.
                    </li>
                    <li>Follow up of cases to achieve customer satisfaction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Eduardo Mejia Portfolio</title>;
