import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ServiceImg from "../components/assets/h4-wien-opera.jpg";

function Service() {
  return (
    <>
      <>
        <Navbar />

        <Hero
          cName="heroMid"
          heroImg={ServiceImg}
          title="Service"
          btnClass="hide"
        />
      </>
    </>
  );
}

export default Service;
