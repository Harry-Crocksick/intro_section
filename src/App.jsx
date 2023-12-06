import Navigation from "./Navigation";
import meet from "./assets/client-meet.svg";
import audiophile from "./assets/client-audiophile.svg";
import databiz from "./assets/client-databiz.svg";
import maker from "./assets/client-maker.svg";

export default function App() {
  return (
    <>
      <Navigation />
      <main className="responsive-container grid grid-cols-12 gap-4 xl:gap-8 items-center">
        <section className="flex flex-col h-full col-span-full md:col-span-6 order-2 md:order-1 py-2">
          <div className="flex-1 px-2 mt-8 md:mt-16 text-center md:text-left">
            <h1 className="font-bold text-4xl xl:text-7xl text-almost-black">
              Make <br className="hidden md:inline" />
              remote work
            </h1>
            <p className="text-lg lg:max-w-[450px] w-full my-3 lg:my-10">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="font-semibold px-6 py-3 bg-almost-black text-almost-white rounded-xl hover:text-almost-black hover:bg-almost-white ring-1 ring-almost-black">
              Learn more
            </button>
          </div>
          <div className="flex space-x-4 lg:space-x-6  xl:space-x-10 justify-center md:justify-start items-center md:px-4 mt-8">
            <img
              src={databiz}
              alt="Databiz"
              className="max-w-[65px] w-full object-contain object-center"
            />
            <img
              src={audiophile}
              alt="Audiophile"
              className="max-w-[65px] w-full object-contain object-center"
            />
            <img
              src={meet}
              alt="Meet"
              className="max-w-[65px] w-full object-contain object-center"
            />
            <img
              src={maker}
              alt="Maker"
              className="max-w-[65px] w-full object-contain object-center"
            />
          </div>
        </section>
        <section className="order-1 md:order-2 col-span-full md:ml-auto md:col-span-6">
          <div className="lg:shrink-0">
            <img
              src="./image-hero-desktop.png"
              alt="Desktop Image Hero"
              className="md:block hidden max-w-[425px] w-full mx-auto xl:ml-auto object-center object-contain"
            />
            <img
              src="./image-hero-mobile.png"
              alt="Mobile Image Hero"
              className="block md:hidden w-full mx-auto xl:ml-auto object-center object-contain"
            />
          </div>
        </section>
      </main>
    </>
  );
}
