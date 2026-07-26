import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <Reveal as="h2" id="contact-heading" className="contact-header" delay={100}>let’s connect</Reveal>
        <Reveal as="p" delay={200}>
          I’m always open to exploring exciting opportunities and
          collaborations. Whether you want to discuss a project, ask a question,
          or simply say hello, feel free to drop me a message.
        </Reveal>
        <Reveal
          as="a"
          delay={320}
          className="contact-cta contact-button"
          href="mailto:your-email@example.com"
        >
          say hi
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
