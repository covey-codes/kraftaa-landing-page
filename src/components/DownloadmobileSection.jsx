import kraftaa from '../assets/Images/kraftaalogo.png';
import mobile from '../assets/Images/mobile.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import googleplay from '../assets/Images/googleplay.png';
import applestore from '../assets/Images/applestore.png';

const DownloadmobileSection = () => {
  return (
    <div>
      {/* MOBILE VIEW (Visible on small and medium screens) */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="w-[300px]">
          <img src={kraftaa} alt="" />
        </div>
        <div>
          <p className="text-black font-normal md:text-2xl md:font-medium sm:text-xl">Download Kraftaa mobile app for easy tracking...</p>
        </div>
        <div className="mt-[40px] flex justify-center w-full">
          <div className="w-[300px] hidden">
            <img src={mobile} alt="" />
          </div>

          <div className="w-[280px] items-center flex flex-col justify-center">
            <img className="m-55" src={googleplay} alt="" />
            <img className="m-10" src={applestore} alt="" />
          </div>
        </div>
        <div className="flex justify-between m-[40px] w-[200px]">
          <div>
            <img src={facebook} alt="logo" />
          </div>
          <div>
            <img src={instagram} alt="logo" />
          </div>
          <div>
            <img src={tiktok} alt="logo" />
          </div>
          <div>
            <img src={linkedin} alt="logo" />
          </div>
          <div>
            <img src={twitter} alt="logo" />
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (Visible on large screens and above) */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-[300px]">
          <img src={kraftaa} alt="" />
        </div>
        <div>
          <p className="text-black text-3xl font-bold">Download Kraftaa mobile app for easy tracking...</p>
        </div>
        <div className="mt-[60px] flex w-full items-center justify-center gap-10">
          <div className="w-[350px]">
            <img src={mobile} alt="" />
          </div>

          <div className="flex flex-col items-center">
            <img className="mb-6 w-[500px]" src={googleplay} alt="" />
            <img className="w-[500px]" src={applestore} alt="" />
          </div>
        </div>
        <div className="flex justify-between mt-[50px] mb-10 w-[300px]">
          <div>
            <img src={facebook} alt="logo" />
          </div>
          <div>
            <img src={instagram} alt="logo" />
          </div>
          <div>
            <img src={tiktok} alt="logo" />
          </div>
          <div>
            <img src={linkedin} alt="logo" />
          </div>
          <div>
            <img src={twitter} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadmobileSection;
