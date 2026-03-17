import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <ScrollLink
              to="wwrd"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#921d7f]"
            >
              WWRD
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="logopedia"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#921d7f]"
            >
              Logopedia
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="integracja-sensoryczna"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#921d7f]"
            >
              Integracja Sensoryczna
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="ndt-bobath"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#921d7f]"
            >
              NDT-Bobath
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="kontakt"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#921d7f]"
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StickyHeader;
