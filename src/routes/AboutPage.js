import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutImg from "../components/assets/h4-wien-opera.jpg";

function About() {
  return (
    <>
      <>
        <Navbar />

        <Hero
          cName="heroMid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
        />
      </>
    </>
  );
}

export default About;
