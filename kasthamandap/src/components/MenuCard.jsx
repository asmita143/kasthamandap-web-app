
import Card from "./ui/Card";
import CardHeader from "./ui/CardHeader";
import CardBody from "./ui/CardBody";
import Divider from "./ui/Divider";
import CardTitle from "./ui/CardTitle";
import useFoodMenu from "../hooks/useFoodMenu";

const MenuCard = ({ name, onClick }) => {
  const { starters, chickenDish, lambDish, vegDish, tandoorDish, veganFood } = useFoodMenu();

  return (
    <>
      <Card onClick={onClick}>
        <CardTitle dishName={name} ></CardTitle>
      </Card>
    </>
  );
};

export default MenuCard;
