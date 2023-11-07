import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useAlaCarte = () => {
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
                console.log(starters);
            } catch (error) {
                console.error(error);
            }
        };
        getStarters();
    }, []);

    const getStartersList = starters.find (
        (info) => info.starter === true
    );
    console.log(getStartersList);
    return { getStartersList }
};

export default useAlaCarte;