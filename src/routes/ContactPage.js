import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from "../components/assets/h6-wien-schonburn.jpg";

function Contact() {
  return (
    <>
      <>
        <Navbar />

        <Hero
          cName="heroMid"
          heroImg={ContactImg}
          title="Contact"
          btnClass="hide"
        />
      </>
    </>
  );
}

export default Contact;
