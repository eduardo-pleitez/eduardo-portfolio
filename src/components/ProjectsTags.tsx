import React from 'react';

type tagsProps = {
  tagsdata: [];
};
export default function Tags({ tagsdata }: tagsProps) {
  return (
    <>
      <div>
        {tagsdata.map((tag) => {
          return (
            <span
              key={tag}
              className='md:mr-3 p-1 my-1 mr-1 bg-black text-white rounded inline-block text-base'
            >
              {tag}
            </span>
          );
        })}
      </div>
    </>
  );
}