import GitHubCalendar from "react-github-calendar";

function About() {
  const customTheme = {
    light: ["#f0ebe7", "#dcc5b9", "#c7a18c", "#b49474", "#a2765f"],
    dark: ["#f0ebe7", "#dcc5b9", "#c7a18c", "#b49474", "#a2765f"],
  };

  return (
    <>
      <div className="about-container">
        <p>About</p>
        <div>
          <p>Technologies</p>
        </div>
        <GitHubCalendar
          username="Kid-Bayou"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={customTheme}
          colorScheme="light"
        />
      </div>
    </>
  );
}

export default About;
