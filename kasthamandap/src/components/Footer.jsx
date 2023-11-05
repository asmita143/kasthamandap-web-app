import React from "react";

const FooterItemTitle = ({ title }) => (
  <p className="text-lg font-semibold">{title}</p>
);
const FooterSpan = ({ text }) => (
  <span className="inline-block w-48">{text}</span>
);
const openingHours = [
  { day: "Monday - Friday", time: "11:00 - 21:00" },
  { day: "Saturday", time: "11:00 - 20:00" },
  { day: "Sunday", time: "Closed" },
  { day: "Special Hour", time: "Closed" },
];

const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-80 flex bg-gray-300 text-black">
      <div className="bg-gray-300 w-1/2 h-full flex flex-col justify-center items-center gap-5">
        <FooterItemTitle title="Address" />
        <div className="h-60 w-2/3 bg-gray-200 bg-[url('assets/map.png')] bg-center bg-cover"></div>
      </div>
      <div className="bg-gray-300 w-1/2 h-full p-5 flex flex-col justify-center items-center gap-10">
        <div className="bg-gray-300 justify-center items-center">
          <FooterItemTitle title="Opening hours" />
          <ul className="bg-gray-300">
            {openingHours.map((hour, index) => (
              <li key={index}>
                <FooterSpan text={hour.day} /> {hour.time}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterItemTitle title="Contact us" />
          <ul>
            <li>
              <span className="inline-block mr-4">
                <a href="tel:0442371195">Phone: +358442371195</a>
              </span>
            </li>
            <span className="inline-block mr-4">
              <a href="mailto:kasthamandap.fin@gmail.com">
                Email : kasthamandap.fin@gmail.com
              </a>
            </span>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
