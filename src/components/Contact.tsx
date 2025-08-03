const Contact = () => {
  return (
    <section
      className="
        mt-16 flex flex-col items-center mx-4 bg-[#030303] text-[#FFF7F0] py-10 px-4 rounded-[10px]
        md:mt-20 md:mx-8 md:py-16 md:px-[82px]
        lg:mt-[120px] lg:mx-[165px] lg:flex-row lg:px-16 lg:py-[81.5px]
      "
    >
      <div className="flex flex-col items-center lg:items-start lg:mr-[208px]">
        <h3 className="font-bold text-[40px] leading-[120%] tracking-normal text-center">
          Book a call with me
        </h3>
        <p className="mt-6 text-center text-[18px] leading-[150%] tracking-normal font-medium lg:text-left">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <a
        href="http://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 rounded-full py-4 px-12 bg-[#E16B5B] text-white lg:mt-0 lg:min-w-fit"
      >
        Free Consultation
      </a>
    </section>
  );
};

export default Contact;
