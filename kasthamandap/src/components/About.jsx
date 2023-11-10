const About = () => {
  return (
    <div className="flex flex-row w-full bg-white">
      <div className="hidden sm:flex basis-1/2 mt-20 ml-10 w-full">
        <img
          className="object-cover h-100 w-1/2 mt-10 rounded-lg"
          src="./assets/images/nepali-food-2.jpg"
          alt="Image Description"
        />
        <div className="flex-column ml-10 mt-10 ">
          <img
            className="object-cover h-64 w-96 rounded-lg"
            src="./assets/images/dhido.jpg"
            alt="Image Description"
          />
          <img
            className="object-cover h-64 w-96 mt-10 rounded-lg"
            src="./assets/images/Dal_Bhat_Tarkari.jpeg"
            alt="Image Description"
          />
        </div>
      </div>
      <div className="md:basis-1/2 ml-10 text-center  ">
        <p className="mt-20 md:text-6xl text-2xl italic font-bold font-dancing underline underline-offset-4 leading-relaxed mb-6 indent-8">
          About Us
        </p>

        <p className="mb-6 leading-relaxed md:text-xl sm:text-base font-cursive indent-8">
          Restaurant Kasthamandap is a popular Nepalese restaurant, located in
          shopping center Pasaati, at kirkkokatu 7, kotka. It is the only Nepali
          restaurant in kotka and offers delicious food and versatile meal
          options. The restaurant is conveniently located in the city center,
          making it easily accessible to both locals and tourists.
        </p>
        <p className="mb-6 leading-relaxed md:text-xl sm:text-base font-cursive indent-8">
          Kasthamandap restaurant's lunch menu includes many popular dishes like
          Chicken Korma, Chicken Rogan Josh, shahi Panir, Butter Chicken,
          Kasthamandap Chicken, Lamb Masala, and more. There are also
          gluten-free and vegetarian options, providing a cozy atmosphere for
          enjoying Nepalese cuisine with friends and family.
        </p>
      </div>
    </div>
  );
};

export default About;
