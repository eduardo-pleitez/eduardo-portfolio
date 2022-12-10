import React from 'react';

type tagsProps = {
  tagsdata: [];
};
export default function Tags({ tagsdata }: tagsProps) {
  return (
    <>
      <p className='md:text-xl text-base'>Technologies: </p>
      <div>
        {tagsdata.map((tag) => {
          return (
            <span
              key={tag}
              className='md:p-2 md:my-2 md:mr-3 p-1 my-1 mr-1 bg-black text-white rounded inline-block md:text-xl text-base'
            >
              {tag}
            </span>
          );
        })}
      </div>
    </>
  );
}