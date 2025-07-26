import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between mx-4 md:mx-8 lg:mx-[165px]">
      <img src={Logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16" />
      <a
        target="_blank"
        href="https://linkedin.com/"
        className="rounded-full bg-[#030303] text-[#FFF7F0] px-6 pt-3 pb-4 text-[16px] leading-[150%] md:py-4 md:px-12"
      >
        Free consultation
      </a>
    </header>
  );
};

export default Header;
