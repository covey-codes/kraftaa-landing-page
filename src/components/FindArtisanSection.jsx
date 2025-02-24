import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgImage from "../assets/images/Pattern.jpg";
import available from "../assets/Images/available.png";
import booked from "../assets/Images/Booked.png";

const FindArtisanSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <>
      {/* Desktop View */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block bg-cover bg-center h-[900px] mb-[20px] mt-[-370px] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex justify-center">
          <motion.div
            className="mt-[150px] flex"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative flex">
              {/* First Image */}
              <div className="w-[700px]">
                <img className="w-[900px]" src={available} alt="img" />
              </div>

              {/* Animated Booked Image */}
              <motion.div
                className="w-[250px] absolute top-[-85px] right-[-80px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img src={booked} alt="checkmark" />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-4xl lg:text-6xl font-bold m-10 mb-20">
                Find Artisan by <span className="text-[#6828B0]">location</span>
              </p>

              <p className="text-2xl mb-10 lg:text-3xl">
                You can easily find skilled artisans based on <br />
                your location. Whether you're at home or at <br />
                work, simply search for the services you need <br />
                and connect with trusted professionals nearby.
              </p>

              <button className="m-[70px] text-2xl text-white bg-[#6828B0] p-[20px] rounded-full w-[700px]">
                Find nearby artisan
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        ref={sectionRef}
        className="relative lg:hidden flex justify-center flex-col bg-cover overflow-hidden bg-center h-auto py-20 px-5"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-3xl font-bold m-5">
            Find Artisan by <span className="text-[#6828B0]">location</span>
          </p>

          <p className="text-xl">
            You can easily find skilled artisans based on your location. <br />
            Whether you're at home or at work, simply search for the
            services you need and connect with trusted professionals
            nearby.
          </p>
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          className="mt-20 w-[700px] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={available} alt="" />
        </motion.div>

        {/* Animated Booked Image for Mobile */}
        <motion.div
          className="w-[230px] top-[-580px] left-[450px] relative"
          initial={{ opacity: 0, rotate: -20 }}
          animate={isInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={booked} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default FindArtisanSection;
