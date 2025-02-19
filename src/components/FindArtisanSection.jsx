import bgImage from "../assets/images/Pattern.jpg";
import available from "../assets/Images/available.png";
import booked from "../assets/Images/Booked.png";
import location from "../assets/Images/location.png"

const FindArtisanSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div
        className="relative hidden lg:block bg-cover bg-center h-[900px] mb-[20px] mt-[-370px] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex justify-center">
          <div className="mt-[150px] flex">
            <div className="relative flex">
              {/* First Image */}
              <div className="w-[700px]">
                <img className="w-[900px]" src={available} alt="img" />
              </div>

              {/* Second Image Positioned at Top-Right of First Image */}
              <div className="w-[250px] absolute top-[-85px] right-[-80px]">
                <img src={booked} alt="checkmark" />
              </div>
            </div>

            <div className=" text-center">
              <p className="text-4xl lg:text-6xl font-bold m-10 mb-20">
                Find Artisan by <span className="text-[#6828B0]">Location</span>
              </p>

              <p className="text-2xl mb-10 lg:text-3xl">
                You can easily find skilled artisans
                based on <br />your location. Whether
                you're at home or at  <br />work, simply
                search for the services you need  <br />and
                connect with trusted professionals nearby.
              </p>

              <button className="m-[70px] text-2xl text-white bg-[#6828B0] p-[20px] rounded-full w-[700px]">
                Find nearby artisan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="relative lg:hidden flex justify-center flex-col bg-cover bg-center h-auto py-20 px-5"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="text-center">
          <p className="text-3xl font-bold m-5">
            Find Artisan by <span className="text-[#6828B0]">Location</span>
          </p>

          <p className="text-2xl">
            You can easily find skilled artisans 
            based on your location. <br /> Whether
            you're at home or at work, simply 
            search for the services <br /> you and
            connect with trusted professionals
            nearby.
          </p>

          
        </div>

        {/* Empty div for mobile image */}
        <div className="mt-20 w-[700px]  flex justify-center ">
          <img src={available} alt="" />
        </div>
        <div className="w-[250px] top-[-600px] left-[450px] relative">
          <img src={booked} alt="" />
        </div>
      </div>
    </>
  );
};

export default FindArtisanSection;
