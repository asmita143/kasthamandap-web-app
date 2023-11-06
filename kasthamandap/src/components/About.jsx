
const About = () => {
    return (
      <div className="flex flex-row w-full bg-white">
        <div className="flex basis-1/2 mt-20 ml-10 w-full">
            <img className=" object-cover h-100 w-1/2 mt-10 rounded-lg" src="../public/Images/nepali-food-2.jpg" alt="Image Description"></img>
            

            <div className="flex-column ml-10 mt-10 ">
                <img className="object-cover h-64 w-96 rounded-lg" src="../public/Images/dhido.jpg" alt="Image Description"></img>
                <img className="object-cover h-64 w-96 mt-10 rounded-lg" src="../public/Images/Dal_Bhat_Tarkari.jpeg" alt="Image Description"></img>
            </div>
        </div>
        <div className="basis-1/2 ml-10">
            <p className="mt-20 text-6xl italic font-bold font-dancing underline underline-offset-4 leading-relaxed">About Us</p>
            <p className="mb-6 leading-relaxed text-xl font-cursive indent-8">
                Restaurant Kasthamandap is a popular Nepalese restautant, located in shopping center Pasaati, at kirkkokatu 7, kotka. 
                It is the only Nepali restaurant in kotka and offers delicious food and versatile meal options. The restaurant is conveniently
                located in the city center, so it is easily accessible to both locals and the tourists.
            </p>
            <p>
                
            </p>
            <p className="leading-relaxed text-xl font-cursive indent-8">
                Kasthamandap restautant's lunch menu has many popular dishes like Chicken Korma, Chicken Rogan Josh, shahi Panir, Butter Chicken, Kasthamandap Chicken, Lamb Masala
                and many more. There are also gluten-free and vegeterian options. The resturant has a cozy atmosphere where you can enjoy delicious Nepalese food with friends ans family.
            </p>
        </div>  
      </div>
    )
  }
  export default About