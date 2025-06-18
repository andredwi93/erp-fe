import { useEffect, useState } from "react";
import { LuPackage, LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setOpenLogin(false);
    setFormData({
      email: "",
      password: "",
    });
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "pricing", label: "PRICING" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav
        className={`bg-white w-full py-4 h-fit px-6 fixed top-0 left-0 z-50 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-fit flex items-center gap-4">
            <LuPackage size={24} className="text-purple-500" />
            <a
              href="#"
              className="font-medium text-base md:text-xl text-purple-500 uppercase"
            >
              home
            </a>
          </div>
          <div className="flex-1 hidden md:flex items-center gap-10 justify-end">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-xl text-black uppercase cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenLogin(true)}
              className="uppercase cursor-pointer border border-purple-500 px-10 py-2 rounded-md text-xl font-medium text-purple-500"
            >
              Login
            </button>
          </div>
          <button
            className="flex md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-10 px-6 pb-8 right-0 bg-white w-full flex flex-col gap-4 mt-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className="font-medium text-base text-black uppercase cursor-pointer"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setOpenLogin(true);
                  setIsMobileMenuOpen(false);
                }}
                className="uppercase cursor-pointer border border-purple-500 px-10 py-2 rounded-md text-base font-medium text-purple-500"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
      {openLogin && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/45 z-50">
          <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto rounded-xl shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col p-8 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-semibold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full mt-2 border-2 border-gray-400 rounded-lg py-2 px-4 text-sm text-black"
                />
              </div>
              <button
                type="submit"
                className="py-4 cursor-pointer flex items-center justify-center gap-4 bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-white font-semibold text-base px-4 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => setOpenLogin(false)}
                className="py-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 text-purple-500 font-semibold text-base px-4 rounded-lg"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
