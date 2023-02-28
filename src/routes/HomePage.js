import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2021/01/01/18/11/vienna-5879501_960_720.jpg"
        title="Your jurney Your story"
        text="Choose Your favourite destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
