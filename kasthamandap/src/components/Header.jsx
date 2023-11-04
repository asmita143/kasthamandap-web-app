const Header = () => {
    return (
      <div className="header">
          <div className="flex flex-col items-center font-lora text-gray-700">
              <span className="font-cursive absolute mt-20 text-6xl text-white">Authentic Nepali Food </span>
              <span className="font-cursive absolute mt-40 text-6xl text-white">at Kotka </span>

          </div>
          <img 
            className="w-full h-96  object-cover" 
            src="https://media.istockphoto.com/id/1185440458/fi/valokuva/valikoitua-intialaista-ruokaa-tumman-maalaismaisella-taustalla-perinteinen-intialainen.jpg?s=2048x2048&w=is&k=20&c=IgTrQrx_YSbv6daIv7T1QEHnIcTbP7NBGA-khCdsAkY=" 
            alt="a cute cat"></img>
      </div>
    )
  }
  
  export default Header