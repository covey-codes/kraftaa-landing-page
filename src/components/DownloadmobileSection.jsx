import kraftaa from '../assets/Images/kraftaalogo.png';
import mobile from '../assets/Images/mobile.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

const DownloadmobileSection = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='w-[300px]'>
            <img src={kraftaa} alt="" />
        </div>
        <div>
            <p className='text-black text-2xl'>Download Kraftaa mobile app for easy tracking...</p>
        </div>
        <div className='mt-[50px]'>
            <img src={mobile} alt="" />
        </div>
        <div className='flex justify-between m-[40px]  w-[200px]'>
            <div><img src={facebook} alt="logo" /></div>
            <div><img src={instagram} alt="logo" /></div>
            <div><img src={tiktok} alt="logo" /></div>
            <div><img src={linkedin} alt="logo" /></div>
            <div><img src={twitter} alt="logo" /></div>
          
        </div>
    </div>
  )
}

export default DownloadmobileSection