import Card from "./ui/Card";
import CardHeader from "./ui/CardHeader";
import CardBody from "./ui/CardBody";
import Divider from "./ui/Divider";
import CardTitle from "./ui/CardTitle";
import useAlaCarte from "../hooks/useAlaCarte";

const MenuCard = ({ name }) => {
  const { getStartersList } = useAlaCarte();
  return (
    <Card>
      <CardTitle dishName={name}></CardTitle>
      <CardHeader dish="Butter Chicken" price="13.90"></CardHeader>
      <Divider />
      <CardBody desc="Fried Chicken">
      </CardBody>
    </Card>
  );
};

export default MenuCard;
