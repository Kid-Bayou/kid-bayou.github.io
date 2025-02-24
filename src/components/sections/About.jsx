import GitHubCalendar from "react-github-calendar";
import { FaJava, FaReact, FaNodeJs, FaPython, FaDatabase, FaJs, FaMicrosoft } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiDotnet } from "react-icons/si";

function About() {
  const skills = [
    { name: "Java", icon: <FaJava color="#f89820" size={100} /> },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" size={100} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={100} /> },
    { name: ".NET", icon: <SiDotnet color="#5C2D91" size={100} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={100} /> },
    { name: "Node.js", icon: <FaNodeJs color="#8CC84B" size={100} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={100} /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={100} /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" size={100} /> },
  ];

  const customTheme = {
    light: ["#f0ebe7", "#dcc5b9", "#c7a18c", "#b49474", "#a2765f"],
    dark: ["#f0ebe7", "#dcc5b9", "#c7a18c", "#b49474", "#a2765f"],
  };

  return (
    <>
      <div className="about-container">
        <div>
          <h2>A little about me</h2>
          <p>
          Hey there, I’m Kidist. I have my Bachelor’s degree in Software Engineering and currently pursuing my Master’s to deepen my technical expertise. I’m curious about emerging technologies and I enjoy environments where learning and innovation collide.  
My passion lies in web dev but I’m always eager to dive into new tools, frameworks, or paradigms. When I’m not coding or studying, I enjoy reading and watching movies.


          </p>
        </div>
        <div>
          <h2>Skillset</h2>
          <div className="about-techstack">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl w-28"
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <GitHubCalendar
            username="Kid-Bayou"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={customTheme}
            colorScheme="light"
          />
        </div>
      </div>
    </>
  );
}

export default About;
