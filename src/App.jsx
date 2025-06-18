import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import css from './assets/css.png';
import github from './assets/github.png';
import html from './assets/html.png';
import mangodb from './assets/mangodb.png';
import nodejs from './assets/node.png';
import react from './assets/react.png'
import HeroImage from './assets/Myimage.jpg';
function App() {
  const Data = {
    Home: {
      role: " I'm a Full Stack Designer",
    },
    Abouts:{
      description:"I have experience in building and designing software. Currently, I love to work on Mobile Apps and web applications using technologies like HTML, React, CSS, Node.js and MongoDB.",
      description2:"I'm a Full Stack Developer with a knack for building and designingsoftware. I enjoy creating both web applications and mobile apps using tools like React, CSS, Node.js, and MongoDB. With a passion for problem-solving, I love turning ideas into reality throughcoding. Let's work together to bring your projects to life!"
    },
    info: {
      
        phone: "+91 93614 64688",
        Email:"tamilthangavel28@gmail.com"
      
    },
   images: {
      img: HeroImage
    }
   }
   const ProjectData = [
    {
      id: 1,
      src: {
        project: {
          img1: "src/assets/portfolio/Desktop1.png",
        },
      },
    },
    {
      id: 2,
      src: {
        project: {
          img1: "src/assets/portfolio/reactParallax.png",
        },
      },
    },
    {
      id: 2,
      src: {
        project: {
          img1: "src/assets/portfolio/arrayDestruct.png",
        },
      },
    }
  ];
  const skills = [
    {
      id: 1,
      img:  html,
      title: "HTML",
      href: "/",
    },
    {
      id: 2,
      img:  css,
      title: "CSS",
      href: "/",
    },
    {
      id: 3,
      img:  react,
      title: "React",
      href: "/",
    },
    {
      id: 4,
      img:  nodejs,
      title: "Node.js",
      href: "/",
    },
    {
      id: 5,
      img:  mangodb,
      title: "MongoDB",
      href: "/",
    },
    {
      id: 6,
      img:  github,
      title: "GitHub & Git",
      href: "/",
    },
  ];

  return (
    <>
      <ThemeProvider>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <NavBar/>
        <Home Data = {Data}/>
        <SocialLinks/>
        <About Data = {Data}/>
        <Portfolio Data = {ProjectData}/>
        <Experience skill={skills}/>
        <Contact Information={Data}/>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App
