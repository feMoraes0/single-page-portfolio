import Grid from '../components/Grid';
import Header from '../components/Header';
import ProfileImage from '../assets/profile-image.png';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function App() {
  return (
    <main className="py-6 bg-[#FFF7F0] min-h-lvh md:pb-10 lg:pt-8 lg:pb-16">
      <Header />
      <section
        data-testid="introduction-section"
        className="mx-4 mt-10 md:mx-8 md:mt-[64px] flex flex-col items-center"
      >
        <h1 className="font-bold text-center text-[40px] leading-[120%] tracking-normal md:text-[56px] md:leading-[130%] text-[#030303] md:mx-[83px]">
          Design solutions made easy
        </h1>
        <p className="mt-5 text-center font-medium text-lg leading-[28px] tracking-normal text-[#6A6662] md:mx-[54px] md:max-w-[592px] lg:max-w-[568px]">
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs.
        </p>
      </section>
      <Grid />
      <section
        data-testid="profile-section"
        className="flex flex-col items-center mt-16 px-4 md:mt-20 lg:flex-row lg:items-center lg:px-[165px]"
      >
        <img
          src={ProfileImage}
          alt="profile"
          className="w-[300px] h-[300px] lg:w-[445px] lg:h-[445px]"
        />
        <div className="flex flex-col items-center justify-start lg:ml-[125px] lg:items-start">
          <h2 className="mt-6 text-[40px] leading-[130%] tracking-normal font-bold text-center text-[#030303] md:px-6 lg:text-left lg:px-0 lg:mt-0">
            I'm Amy, and I'd love to work on your next project
          </h2>
          <p className="mt-5 text-[18px] leading-[150%] tracking-normal font-medium text-[#6A6662] text-center lg:text-left">
            I love working with others to create beautiful design solutions.
            I've designed everything from brand illustrations to complete mobile
            apps. I'm also handy with a camera!
          </p>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full py-4 px-12 bg-[#E16B5B] text-white"
          >
            Free Consultation
          </a>
        </div>
      </section>
      <Slider />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
