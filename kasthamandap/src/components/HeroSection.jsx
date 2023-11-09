const HeroSection = () => {
  return (
    <section
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: `url($../../public//Images/spices2.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 flex items-center relative z-10">
        <div className="text-center mx-auto">
          <h1 className="text-8xl font-semibold text-white">
            An Authentic Nepali Cuisine In Kotka
          </h1>
          <a
            className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-700 transition-colors mt-10"
            href=""
          >
            A La Carte
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
