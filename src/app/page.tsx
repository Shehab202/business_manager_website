import HomePage from "./home/HomePage";
import About from "./about/About";
import Services from "./services/Services";
import Media from "./media/Media";
import Technology from "./technology_use/Technology";
import Progress from "./progress/Progress";
import Footer from "./footer/Footer";
import Why_choose_us from "./why_choose_us/Why_choose_us";
import Contact from "./contact/Contact";
export default function Home() {
  return (
    <>
      <HomePage />

      <About />
      <Services />
      <Media />
      <Technology />
      <Progress />
      <Why_choose_us />
      <Contact />
      <Footer />
    </>
  );
}
