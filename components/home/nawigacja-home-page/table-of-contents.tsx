import { Link as ScrollLink } from "react-scroll";

const TableOfContents = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tight text-gray-800">
          Spis treści
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { to: "wwrd", text: "WWRD" },
              { to: "logopedia", text: "Logopedia" },
              { to: "integracja-sensoryczna", text: "Integracja Sensoryczna" },
              { to: "ndt-bobath", text: "NDT-Bobath" },
              { to: "gimnastyka-korekcyjna", text: "Gimnastyka Korekcyjna" },
              { to: "tus", text: "TUS" },
              { to: "terapia-pedagogiczna", text: "Terapia Pedagogiczna" },
              { to: "dogoterapia", text: "Dogoterapia" },
              { to: "dla-dzieci", text: "Dla Dzieci i Młodzieży" },
              { to: "dla-doroslych", text: "Dla Dorosłych" },
              { to: "kontakt", text: "Kontakt" },
            ].map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-700 hover:text-[#921d7f] hover:bg-gray-50 rounded transition duration-300 ease-in-out cursor-pointer"
              >
                {item.text}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
