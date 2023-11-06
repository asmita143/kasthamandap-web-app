import Card from "./ui/Card";
import CardHeader from "./ui/CardHeader";
import CardBody from "./ui/CardBody";
import Divider from "./ui/Divider";
import CardTitle from "./ui/CardTitle";

const MenuCard = ({items}) => {
  console.log(items);
  return (
    <Card>
      <CardTitle>Starters</CardTitle>
      <CardHeader dish="Butter Chicken" price="13,90"></CardHeader>
      <Divider />
      <CardBody>
        Tandoori grilled chicken pieces in creamy ginger, tomato butter sauce.
      </CardBody>
    </Card>
  );
};

export default MenuCard;
