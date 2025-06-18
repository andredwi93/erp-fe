function Hero() {
  return (
    <div className="w-full h-auto mt-14 md:mt-0 lg:h-screen bg-gray-400">
      <div className="container pt-10 md:pt-20 lg:pt-0 pb-10 lg:pb-0 px-6 sm:px-10 mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="content w-full lg:w-[450px] h-full flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-5xl leading-normal md:leading-16 font-bold text-black">
            Streamline Your Business with
            <span className="text-purple-500"> Smart ERP</span>
          </h1>
          <p className="text-lg text-black font-medium">
            Complete inventory management, sales tracking, and business
            analytics in one powerful platform. Built for Indonesian businesses
            ready to scale.
          </p>
          <p className="text-lg text-black italic">
            "Transform your business operations with intelligent automation"
          </p>
        </div>
        <img
          src="./src/assets/hero.svg"
          alt="hero"
          className="w-[200px] md:w-[400px] pr-0 md:pr-20 illus"
        />
      </div>
    </div>
  );
}

export default Hero;
