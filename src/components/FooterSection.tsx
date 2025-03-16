const FooterSection = () => {
  return (
    <>
      <div className="lg:hidden bg-black h-[200px] flex flex-col overflow-hidden items-center justify-center">
        <img className="w-[200px]" src="/logo.png" alt="logo" />
        <p className="text-[#B1FA63] mb-3 text-sm">
          Your personal <span className="text-[#B1FA63]">Connection</span> to
          Local <span className="text-[#B1FA63]">Experts...</span>
        </p>
        <ul className="flex text-[11px] justify-center items-start text-nowrap text-white">
          <li className="m-1">Blog</li>
          <li className="m-1">About Us</li>
          <li className="m-1">Contact Us</li>
          <li className="m-1">FAQ</li>
          <li className="m-1">Privacy Policy</li>
        </ul>
      </div>

      <div className="hidden lg:flex flex-col items-center bg-black h-[200px]">
        <img className="w-[200px]" src="/logo.png" alt="logo" />
        <p className="text-[#B1FA63] text-1xl">
          Your personal Connection to Local Experts...
        </p>
        <ul className="flex justify-center items-start text-white">
          <li className="m-5">Blog</li>
          <li className="m-5">About Us</li>
          <li className="m-5">Contact Us</li>
          <li className="m-5">FAQ</li>
          <li className="m-5">Privacy Policy</li>
        </ul>
      </div>
    </>
  );
};

export default FooterSection;
