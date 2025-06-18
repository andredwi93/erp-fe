import { useState } from "react";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section id="contact" className="bg-gray-300">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-black text-center">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base md:text-lg text-black mt-4 text-center w-full md:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui
          assumenda at numquam quibusdam aperiam sint eaque nisi eum. Magnam,
          fugiat. Laborum facere quis et, error ut eum sint magnam?
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg flex-1 flex items-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-purple-500 rounded-2xl p-3">
                  <LuMail color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-balance">
                    Email Us
                  </h3>
                  <a href="#" className="text-base text-black">
                    support@erpsolution.id
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg flex-1 flex items-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-purple-500 rounded-2xl p-3">
                  <LuPhone color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-balance">
                    Call Us
                  </h3>
                  <a href="#" className="text-base text-black">
                    +62 21 1234 5678
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg flex-1 flex items-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-purple-500 rounded-2xl p-3">
                  <LuMapPin color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-balance">
                    Visit Our Office
                  </h3>
                  <a href="#" className="text-base text-black">
                    JL. Pahlawan No. 1, Jakarta
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col p-8 gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-semibold text-black"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-semibold text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="text-base font-semibold text-black"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-base font-semibold text-black"
                >
                  Tell us about your business needs
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-4 cursor-pointer flex items-center justify-center gap-4 bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-white font-semibold text-base px-4 rounded-lg"
              >
                <LuSend size={20} /> Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
