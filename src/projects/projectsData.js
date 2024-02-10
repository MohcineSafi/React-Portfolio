import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "NextJS To-Do List",
    image: projectOne,
    description: (
      <>
        <p>
        A simple Todo List application built using Next.js and React.
        </p>
      </>
    ),
    github: "https://github.com/MohcineSafi/NextJS-To-Do-List",
    demo: "https://next-js-to-do-list-kappa.vercel.app/",
  },
  2: {
    title: "React-Redux Managing User",
    image: projectTwo,
    description: (
      <>
        <p>
        This project is a simple React-based Stagiaire (trainee) Management System that allows users to view 
        a list of stagiaires, add new stagiaires, and view detailed information about each stagiaire.
        </p>
      </>
    ),
    github: "https://github.com/MohcineSafi/React-Redux-Managing-User",
    demo: "https://netlify.com",
  },
  3: {
    title: "React Stagiaire Management System",
    image: projectThree,
    description: (
      <>
        <p>
        This is a simple React Redux application for managing user information. Users can be added, updated,
         and deleted.
        </p>
      </>
    ),
    github: "https://github.com/MohcineSafi/React-Stagiaire-Management-System",
    demo: "https://netlify.com",
  },
};

export default projects;
