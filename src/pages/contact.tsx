import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className='flex justify-center'>
        <div className='flex sm:flex-row flex-col bg-white lg:px-14 lg:py-14 md:px-10 md:py-10 px-6 py-6 shadow-lg rounded-lg text-gray-700 lg:w-8/12 md:w-11/12 w-full'>
          <div className='sm:w-1/2 w-full text-black pb-4'>
            <h1 className='text-4xl mb-8'>Get in touch</h1>
            <div className='sm:ml-6'>
              <p className='mb-4'>
                <a
                  href='mailto:eduardo.77.1996@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faEnvelope} className='mr-4' />
                  eduardo.77.1996@gmail.com
                </a>
              </p>
              <p className='mb-4'>
                <FontAwesomeIcon icon={faPhone} className='mr-4' />
                +503 77381467
              </p>
              <p className='mb-4'>
                <FontAwesomeIcon icon={faLocationArrow} className='mr-4' />
                Santa Ana, El Salvador
              </p>
            </div>
          </div>
          <div className='sm:w-1/2 w-full'>
            <div className='mb-6'>
              <input
                type='text'
                className='block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none'
                placeholder='Your Name'
              />
            </div>
            <div className='mb-6'>
              <input
                type='email'
                className='block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none'
                placeholder='Email Address'
              />
            </div>
            <div className='mb-6'>
              <textarea
                className='
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none
          '
                rows={3}
                placeholder='Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='
          w-full
          px-6
          py-2.5
          bg-black
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-800 hover:shadow-lg
          focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;
