import { useState } from "react";
import { Popover } from "@headlessui/react";
import logo from "./assets/logo.svg";
import arrowDown from "./assets/icon-arrow-down.svg";
import arrowUp from "./assets/icon-arrow-up.svg";
import menu from "./assets/icon-menu.svg";
import closeMenu from "./assets/icon-close-menu.svg";
import { companySubLinks, featuresSubLinks } from "./lib/navLinks";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop view */}
      <header className="p-4 xl:px-20">
        <nav className="flex items-center justify-between">
          <section className="flex items-center space-x-14">
            <div className="shrink-0">
              <img src={logo} alt="Logo" className="w-20" />
            </div>
            <div className="lg:flex items-center space-x-10 hidden">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center space-x-2 focus:outline-none">
                      <span>Features</span>
                      {open ? (
                        <img src={arrowUp} alt="Up Arrow" />
                      ) : (
                        <img src={arrowDown} alt="Down Arrow" />
                      )}
                    </Popover.Button>

                    <Popover.Panel className="bg-white shadow-lg py-4 px-2 ring-1 ring-slate-700/5 rounded-md w-44 absolute right-0 top-8 z-10">
                      <div className="flex flex-col">
                        {featuresSubLinks.map((link) => (
                          <span
                            key={link.title}
                            className="w-full p-2 inline-flex items-center space-x-4 hover:bg-gray-300/30 rounded"
                          >
                            <img
                              src={link.icon}
                              alt={link.title}
                              className="w-4"
                            />
                            <a key={link.title} href={`${link.title}`}>
                              {link.title}
                            </a>
                          </span>
                        ))}
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center space-x-2 focus:outline-none">
                      <span>Company</span>
                      {open ? (
                        <img src={arrowUp} alt="Up Arrow" />
                      ) : (
                        <img src={arrowDown} alt="Down Arrow" />
                      )}
                    </Popover.Button>

                    <Popover.Panel className="bg-white shadow-lg py-4 px-2 ring-1 ring-slate-700/5 rounded-md w-44 absolute right-0 top-8 z-10">
                      <div className="flex flex-col">
                        {companySubLinks.map((link) => (
                          <span
                            key={link}
                            className="w-full p-2 inline-flex items-center space-x-4 hover:bg-gray-300/30 rounded"
                          >
                            <a key={link} href={`${link}`}>
                              {link}
                            </a>
                          </span>
                        ))}
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <button>Careers</button>
              <button>About</button>
            </div>
          </section>
          <section className="hidden lg:inline-flex space-x-4 items-center">
            <button className="px-4 py-2">Login</button>
            <button className="px-4 py-2 ring-1 ring-almost-black rounded-xl">
              Register
            </button>
          </section>
          <div className="lg:hidden">
            <button
              className=""
              aria-label="Open Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={menu} alt="Hamburger Menu" />
            </button>
          </div>
        </nav>
      </header>
      {/* Desktop view */}

      {/* Mobile view */}
      <section
        className={`fixed inset-0 bg-black opacity-40 z-0 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      ></section>
      <header
        className={`fixed top-0 bottom-0 right-0 bg-almost-white p-4 xl:px-20 w-64 min-h-screen transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="block ml-auto mb-8 max-w-max"
          aria-label="Close Menu"
        >
          <img
            src={closeMenu}
            alt="Close Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
        <nav className="flex flex-col justify-start">
          <div className="flex flex-col space-y-10">
            <FeatureButton />
            <CompanyButton />
            <button className="self-start">Careers</button>
            <button className="self-start">About</button>
          </div>
          <section className="inline-flex flex-col space-y-4 mt-10 items-center">
            <button className="px-4 py-2">Login</button>
            <button className="w-full px-4 py-2 ring-1 ring-almost-black rounded-xl">
              Register
            </button>
          </section>
        </nav>
      </header>
    </>
  );
}

function CompanyButton() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center space-x-2 focus:outline-none">
            <span>Company</span>
            {open ? (
              <img src={arrowUp} alt="Up Arrow" />
            ) : (
              <img src={arrowDown} alt="Down Arrow" />
            )}
          </Popover.Button>

          <Popover.Panel className="mt-3 w-44">
            <div className="flex flex-col">
              {companySubLinks.map((link) => (
                <span
                  key={link}
                  className="w-full p-2 inline-flex items-center space-x-4 hover:bg-gray-300/30 rounded"
                >
                  <a key={link} href={`${link}`}>
                    {link}
                  </a>
                </span>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

function FeatureButton() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center space-x-2 focus:outline-none">
            <span>Features</span>
            {open ? (
              <img src={arrowUp} alt="Up Arrow" />
            ) : (
              <img src={arrowDown} alt="Down Arrow" />
            )}
          </Popover.Button>

          <Popover.Panel className="mt-3 w-44">
            <div className="flex flex-col">
              {featuresSubLinks.map((link) => (
                <span
                  key={link.title}
                  className="w-full p-2 inline-flex items-center space-x-4 hover:bg-gray-300/30 rounded"
                >
                  <img src={link.icon} alt={link.title} className="w-4" />
                  <a key={link.title} href={`${link.title}`}>
                    {link.title}
                  </a>
                </span>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
