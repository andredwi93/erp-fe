import { LuLightbulb, LuTarget, LuUsers } from "react-icons/lu";

function About() {
  const values = [
    {
      icon: LuTarget,
      title: "Our Mission",
      description:
        "To empower Indonesian businesses with intelligent ERP solutions that simplify operations and accelerate growth",
    },
    {
      icon: LuUsers,
      title: "Our Team",
      description:
        "A passionate group of developers, business analysts, and industry experts dedicated to solving real business challenges",
    },
    {
      icon: LuLightbulb,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology including AI and machine learning to provide predictive insights for your business",
    },
  ];
  return (
    <section id="about" className="bg-gray-300">
      <div className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-black text-center">
          About ERPSolution
        </h2>
        <p className="text-base md:text-lg text-black mt-4 text-center w-full lg:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui
          assumenda at numquam quibusdam aperiam sint eaque nisi eum. Magnam,
          fugiat. Laborum facere quis et, error ut eum sint magnam?
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white px-8 py-10 rounded-3xl shadow-xl flex-1 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center bg-purple-500 p-4 rounded-2xl">
                <item.icon size={36} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-3xl font-bold text-black">{item.title}</h3>
              <p className="text-base text-center text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-linear-to-r from-blue-500 to-violet-600 rounded-3xl py-10 mt-14 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">500+</span>
            <span className="text-lg text-white">Business Served</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">2025</span>
            <span className="text-lg text-white">Founded</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">10</span>
            <span className="text-lg text-white">Team Members</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">99%</span>
            <span className="text-lg text-white">Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
