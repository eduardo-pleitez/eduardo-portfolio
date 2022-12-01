import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
      <h2 className='text-white text-2xl mb-3'>Page not found</h2>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <button className="mt-5 p-5 text-white border border-white">
        <Link to="/">Go Home</Link>
      </button>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page not found</title>;
