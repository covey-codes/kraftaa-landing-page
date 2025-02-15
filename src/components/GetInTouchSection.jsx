import dashboard from "../assets/Images/dashboard pic.jpg";

const GetInTouchSection = () => {
  return (
    <div className="px-6 py-12">
      
      <div className="text-center mb-7">
        <p className="text-2xl md:text-5xl text-ink  sm:text-3xl font-bold">
          Get in touch with the best{" "}
          <span className="text-[#6828B0]">Artisans </span>that
          <br />
           offer{" "}
          <span className="text-[#6828B0]">Quality</span> services
        </p>
      </div>
      
      <div className="mx-auto w-full sm:w-[105%] md:w-[85%] lg:w-[90%] xl:w-[(90%] max-h-[1300px]">
  <img
    src={dashboard}
    alt="Dashboard"
    className="mx-auto w-full max-h-[1200px] object-contain"
  />
</div>

    </div>
  );
};

export default GetInTouchSection;
