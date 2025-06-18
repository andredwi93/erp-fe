import { LuStar } from "react-icons/lu";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 250.000",
      period: "/bulan",
      description: "Sangat mudah digunakan untuk bisnis kecil",
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "Rp 500.000",
      period: "/bulan",
      description: "Sangat cocok untuk bisnis berkembang",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
      popular: true,
    },
    {
      name: "Entrepreneur",
      price: "Rp 1.500.000",
      period: "/bulan",
      description: "Sangat cocol untuk bisnis besar",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="bg-gray-400">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-black text-center">
          Choose Your Plan
        </h2>
        <p className="text-base md:text-lg text-black mt-4 text-center w-full md:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui
          assumenda at numquam quibusdam aperiam sint eaque nisi eum. Magnam,
          fugiat.
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mt-10 md:mt-20">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`bg-white relative px-8 py-8 rounded-3xl shadow-xl flex-1 flex flex-col items-center justify-between gap-4 hover:shadow-2xl
                  ${item.popular ? "border-2 border-purple-500 scale-105 lg:scale-110" : ""}
                `}
            >
              {item.popular && (
                <div className="flex items-center gap-2 absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 px-6 py-2 rounded-full">
                  <LuStar size={20} color="white" />{" "}
                  <span className="text-base font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1 mb-4">
                <div className="flex flex-col gap-4 text-center">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <p className="text-3xl font-bold text-black">
                      {item.price}
                    </p>
                    <p className="text-lg text-black">{item.period}</p>
                  </div>
                  <p className="text-base text-black">{item.description}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="text-lg text-black flex gap-2">
                      <span className="text-black">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="uppercase cursor-pointer border border-purple-500 px-10 py-2 rounded-md text-xl font-medium text-purple-500 hover:bg-purple-500 hover:text-white">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
