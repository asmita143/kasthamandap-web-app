import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function OpeningHours() {
  const [openingHours, setOpeningHours] = useState([]);
  const contactInfoRef = collection(db, "OpeningHours");

  useEffect(() => {
    const getOpeningHours = async () => {
      try {
        const data = await getDocs(contactInfoRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOpeningHours(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getOpeningHours();
  }, []);

  // Find opening hours
  const weekdayOpeningHours = openingHours.find(
    (info) => info.id === "weekday"
  );
  const saturdayOpeningHours = openingHours.find(
    (info) => info.id === "saturday"
  );
  const sundayOpeningHours = openingHours.find((info) => info.id === "sunday");

  return (
    <div>
      <h1>Opening Hours</h1>

      {weekdayOpeningHours && (
        <div className="day">
          <h2>Monday</h2>
          <p>{weekdayOpeningHours.openingHour} : 00</p>
          <p>{weekdayOpeningHours.closingHour} : 00</p>
        </div>
      )}

      {saturdayOpeningHours && (
        <div className="day">
          <h2>Saturday</h2>
          <p>{saturdayOpeningHours.openingHour} : 00</p>
          <p>{saturdayOpeningHours.closingHour} : 00</p>
        </div>
      )}

      {sundayOpeningHours && (
        <div className="day">
          <h2>Sunday</h2>
          {!sundayOpeningHours.open && 
            <p>Closed</p>
          }
        </div>
      )}
    </div>
  );
}

export default OpeningHours;
