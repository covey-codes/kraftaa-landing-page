import bgImage from "../assets/images/Pattern.jpg";
import available from "../assets/Images/available.png";
import booked from "../assets/Images/Booked.png";
import location from "../assets/Images/location.png"

const FindArtisanSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div
        className="relative hidden lg:block bg-cover bg-center h-[800px] mb-[20px] mt-[-190px] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex justify-center">
          <div className="mt-[150px] flex">
            <div className="relative flex">
              {/* First Image */}
              <div className="w-[700px]">
                <img src={available} alt="img" />
              </div>

              {/* Second Image Positioned at Top-Right of First Image */}
              <div className="w-[250px] absolute top-[-75px] right-[70px]">
                <img src={booked} alt="checkmark" />
              </div>
            </div>

            <div className="items-center text-center">
              <p className="text-4xl font-bold m-10">
                Find Artisan by <span className="text-[#6828B0]">Location</span>
              </p>

              <p className="text-2xl">
                You can easily find skilled artisans <br />
                based on your location. Whether <br />
                you're at home or at work, simply <br />
                search for the services you and <br />
                connect with trusted professionals <br />
                nearby.
              </p>

              <button className="m-[60px] text-2xl text-white bg-[#6828B0] p-[20px] rounded-full w-[500px]">
                Find nearby artisan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="relative lg:hidden bg-cover bg-center h-auto py-20 px-5"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="text-center">
          <p className="text-3xl font-bold m-5">
            Find Artisan by <span className="text-[#6828B0]">Location</span>
          </p>

          <p className="text-lg">
            You can easily find skilled artisans 
            based on your <br />location. Whether
            you're at home or at work, simply <br />
            search for the services you and
            connect with <br />trusted professionals
            nearby.
          </p>

          
        </div>

        {/* Empty div for mobile image */}
        <div className="mt-10 w-[400px] ml-[120px] flex justify-center items-center">
          <img src={location} alt="" />
        </div>
      </div>
    </>
  );
};

export default FindArtisanSection;
