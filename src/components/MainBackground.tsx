import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';


export default function MainBackground() {
  const { mainbackground } = useStaticQuery(
    graphql`
      query {
        mainbackground: file(relativePath: { eq: "mainbackground.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  );
  const image = getImage(mainbackground);
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      className='p-12 text-center relative overflow-hidden bg-no-repeat bg-cover'
      style={{
        height: '450px',
      }}
      Tag='section'
      {...bgImage}
    >
      <div
        className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className='flex justify-center items-center h-full'>
          <div className='text-white'>
            <h2 className='font-semibold text-4xl mb-4'>
              Hi, I&apos;m Eduardo, a front-end developer.
            </h2>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}