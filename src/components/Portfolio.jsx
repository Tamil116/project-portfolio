import React from 'react';

const Portfolio = ({ Data }) => {
  return (
    <div
      name="portfolio"
      className="w-full md:min-h-screen bg-white text-black dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Data && Data.length > 0 ? (
            Data.map(({ id, src }) => (
              <div
                key={id}
                className="shadow-md dark:shadow-gray-600 shadow-gray-400 rounded-lg overflow-hidden hover:scale-105 duration-00"
              >
                <img
                  src={src?.project?.img1}
                  // alt={`Project ${id}`}
                  className=""
                />
               
                
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 dark:text-gray-400">
              No projects available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
