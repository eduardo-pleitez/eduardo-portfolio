import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage} from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { IMainBackground } from '../interfaces/commonInterfaces';

export default function MainBackground() {
  const { mainbackground }: IMainBackground = useStaticQuery(
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
      className='hero-image p-12 text-center relative overflow-hidden bg-no-repeat bg-cover'
      Tag='section'
      {...bgImage}
    >
      <div
        className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className='flex justify-center items-center h-full'>
          <div className='text-white'>
            <h1 className='font-semibold lg:text-5xl sm:text-4xl text-3xl mb-4'>
              Hi, I&apos;m Eduardo, a front-end developer.
            </h1>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}
