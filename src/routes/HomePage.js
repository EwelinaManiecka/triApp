import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_1280.jpg"
        title="Your jurney Your story"
        text="Choose Your favourite destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />

      <Destination />
    </>
  );
}

export default Home;
