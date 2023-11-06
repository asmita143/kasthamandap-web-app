import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import MenuCard from "../MenuCard";

function DisheCard () {
    const [starters, setStarters] = useState([]);
    const statersRef = collection(db, "A_La_Carte");

    useEffect(() => {
        const getStarters = async () => {
            try {
                const data = await getDocs(statersRef);
                const filteredDish = data.docs.map((doc) => ({
                    ...doc.data(),
                    id:doc.id,
                }));
                setStarters(filteredDish);
            } catch (error) {
                console.error(error);
            }
        };
        getStarters();
    }, []);

    const getStartersList = starters.find (
        (info) => info.starter == true
    );

    return (
        <div className="flex-col">
            <img className=" object-cover h-48 w-full" src="../public/Images/nepali-food-2.jpg" alt="Image Description"></img>
            <div className="flex flex-wrap">
                <MenuCard items={getStartersList}/>
                <MenuCard />
                <MenuCard />
            </div>
        </div>
      
    );
}
  
  export default DisheCard;