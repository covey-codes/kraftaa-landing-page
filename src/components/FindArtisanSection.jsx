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
        className="relative hidden lg:block bg-cover bg-center h-[900px]  mt-[-370px] overflow-hidden"
        style={{ backgroundImage: `url("/Pattern.jpg")` }}
      >
        <div className="flex">
          <motion.div
            className="mt-[150px] m-10 flex"
            initial={{ opacity: 0, x: 100 }}
            animate={isDesktopInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative flex">
              {/* First Image */}
              <div className="w-[400px]">
                <img className="w-[900px] md:w-[400px]" src="/available.png" alt="img" />
              </div>

              {/* Animated Booked Image */}
              <motion.div
                className="w-[200px] absolute top-[-75px] right-[-70px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isDesktopInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img src="/Booked.png" alt="checkmark" />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:6xl font-bold mb-10">
                {headers.find((header) => header.key === "findArtisan")?.title}
              </p>

              <p className="text-[20px] mb-5 ">
                You can easily find skilled artisans based on <br />
                your location. Whether you're at home or at <br />
                work, simply search for the services you need <br />
                and connect with trusted professionals nearby.
              </p>

              <button className="m-[50px] text-2xl text-white bg-[#6828B0] p-[20px] rounded-full w-[500px]">
                Find nearby artisan
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
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
            You can easily find skilled artisans based on your location.
            Whether you're at home or at work, simply search for the
            services you need and connect with trusted professionals
            nearby.
          </p>
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          className="mt-20 w-[300px] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isMobileInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/available.png" alt="" />
        </motion.div>

        {/* Animated Booked Image for Mobile */}
        <motion.div
          className="w-[150px] top-[-350px] left-[200px] relative"
          initial={{ opacity: 0, rotate: -20 }}
          animate={isMobileInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/Booked.png" alt="booked" />
        </motion.div>
      </div>
    </>
  );
};

export default FindArtisanSection;
