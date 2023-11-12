import React from "react";
import useFoodMenu from "../src/hooks/useFoodMenu"
import CardBody from "./components/ui/CardBody";
import CardHeader from "./components/ui/CardHeader";
import CardTitle from "./components/ui/CardTitle";
import Divider from "./components/ui/Divider";

const DisplayMenu = ({name}) => {
    const { starters, chickenDish, lambDish, vegDish, tandoorDish, veganFood } = useFoodMenu();
    return(
      <div className="w-full p-3">
        <CardTitle dishName={name}></CardTitle>
        {name === "Starters" &&
            starters.map((starter, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={starter.title} price={starter.price} />
            <Divider />
            <CardBody desc={starter.description} />
            </React.Fragment>
        ))}

        {name === "Vegetarian" &&
            vegDish.map((veg, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={veg.title} price={veg.price} />
            <Divider />
            <CardBody desc={veg.description} />
            </React.Fragment>
        ))}

        {name === "Lamb" &&
            lambDish.map((lamb, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={lamb.title} price={lamb.price} />
            <Divider />
            <CardBody desc={lamb.description} />
            </React.Fragment>
        ))}

        {name === "Chicken" &&
            chickenDish.map((chicken, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={chicken.title} price={chicken.price} />
            <Divider />
            <CardBody desc={chicken.description} />
            </React.Fragment>
        ))}

        {name === "Tandoor" &&
            tandoorDish.map((tandoor, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={tandoor.title} price={tandoor.price} />
            <Divider />
            <CardBody desc={tandoor.description} />
            </React.Fragment>
        ))}

        {name === "Vegan" &&
            veganFood.map((veganfood, index) => (
            <React.Fragment key={index}>
            <CardHeader dish={veganfood.title} price={veganfood.price} />
            <Divider />
            <CardBody desc={veganfood.description} />
            </React.Fragment>
        ))}
      </div>
    )
};

export default DisplayMenu