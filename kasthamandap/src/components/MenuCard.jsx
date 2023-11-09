
import Card from "./ui/Card";
import CardTitle from "./ui/CardTitle";

const MenuCard = ({ name, onClick }) => {

  return (
    <>
      <Card onClick={onClick}>
        <CardTitle dishName={name} ></CardTitle>
      </Card>
    </>
  );
};

export default MenuCard;
