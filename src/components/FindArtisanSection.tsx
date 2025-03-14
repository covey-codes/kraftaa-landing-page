import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { headers } from "../Constants"; // Adjust the path as needed

const FindArtisanSection = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const isDesktopInView = useInView(desktopRef, { once: true });
  const isMobileInView = useInView(mobileRef, { once: true });

  return (
    <>
      {/* Desktop View */}
      <div
        ref={desktopRef}
        className="relative hidden lg:block bg-cover bg-center h-[900px] lg:mt-[-370px] w-full"
        style={{ backgroundImage: `url("/Pattern.jpg")` }}
      >
        <div className="flex justify-center">
          <motion.div
            className="mt-[150px] flex"
            initial={{ opacity: 0, x: 100 }}
            animate={isDesktopInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative flex">
              {/* First Image */}
              <div className="w-full max-w-[700px]">
                <img className="w-full h-auto" src="/available.png" alt="img" />
              </div>

              {/* Animated Booked Image */}
              <motion.div
                className="w-[250px] absolute top-[-85px] right-[-80px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isDesktopInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img src="/Booked.png" alt="checkmark" />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-bold m-10 mb-20">
                {headers.find((header) => header.key === "findArtisan")?.title}
              </p>

              <p className="text-2xl mb-10 lg:text-3xl">
                You can easily find skilled artisans based on <br />
                your location. Whether you're at home or at <br />
                work, simply search for the services you need <br />
                and connect with trusted professionals nearby.
              </p>

              <button className="m-10 text-2xl text-white bg-[#6828B0] p-[20px] rounded-full w-full max-w-[90%] sm:max-w-[300px]">
                Find nearby artisan
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Medium View */}
      <div
        ref={mobileRef}
        className="relative lg:hidden flex justify-center flex-col bg-cover overflow-hidden bg-center h-auto py-20 px-5"
        style={{ backgroundImage: `url("/Pattern.jpg")` }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isMobileInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-2xl text-nowrap font-bold m-5">
            {headers.find((header) => header.key === "findArtisan")?.title}
          </p>

          <p className="text-1xl md:2xl">
            You can easily find skilled artisans based on your location. Whether
            you're at home or at work, simply search for the services you need
            and connect with trusted professionals nearby.
          </p>
        </motion.div>

        {/* Centered Mobile & Medium Image */}
        <motion.div
          className="mt-20 w-full max-w-[500px] flex justify-center mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isMobileInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img className="w-[90%] h-auto" src="/available.png" alt="" />
        </motion.div>

        {/* Positioned Animated Booked Image for Mobile & Medium */}
        <motion.div
          className="w-[150px] absolute top-[] left-[230px]"
          initial={{ opacity: 0, rotate: -20 }}
          animate={isMobileInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/Booked.png" alt="booked" className="w-full" />
        </motion.div>
      </div>
    </>
  );
};

export default FindArtisanSection;
