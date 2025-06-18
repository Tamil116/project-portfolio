import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { data } from 'autoprefixer';

const About = ({Data}) => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/tamizharasan-t-742660283/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: 'https://github.com/Tamil116',
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto:tamilthangavel28@gmail.com",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: '/Tamil_resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div
      name="about"
      className="w-full justify-center items-center h-screen 
                 bg-white text-black 
                 dark:bg-gradient-to-b dark:from-gray-800 dark:to-black dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          {Data.Abouts.description2}
        </p>
        
        <div className="md:hidden items-center justify-evenly flex pt-10">
          <ul className="flex">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  'flex items-center w-14 h-14 px-4 hover:scale-105 duration-300 ' + style
                }
                style={{ margin: '0 5px' }}
              >
                <a
                  href={href}
                  className="flex flex-col justify-center items-center w-full text-black dark:text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
