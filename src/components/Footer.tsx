import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="mt-8 flex flex-row items-center justify-between mx-4 md:mt-12 md:mx-8 lg:mx-[165px]">
      <img src={Logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16" />
      <a
        target="_blank"
        href="https://linkedin.com/"
        rel="noopener noreferrer"
        className="rounded-full bg-[#030303] text-[#FFF7F0] px-6 pt-3 pb-4 text-[16px] leading-[150%] md:py-4 md:px-12"
      >
        Free consultation
      </a>
    </footer>
  );
};

export default Footer;
