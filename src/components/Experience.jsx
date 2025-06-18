import React from 'react';

const Experience = ({ skill }) => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-white text-black dark:bg-gradient-to-b dark:from-gray-800 dark:to-black dark:text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 dark:border-gray-400 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skill.map(({ id, img, title, href }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-white dark:bg-gray-900"
            >
              <a href={href} target="_blank" rel="noreferrer">
                <img src={img} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
