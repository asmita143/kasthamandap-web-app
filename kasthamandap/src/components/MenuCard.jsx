import React from "react";

import Card from "./ui/Card";
import CardHeader from "./ui/CardHeader";
import CardBody from "./ui/CardBody";
import Divider from "./ui/Divider";

const MenuCard = () => {
  return (
    <Card href="/button-chicken">
      <CardHeader>Butter Chicken</CardHeader>
      <Divider />
      <CardBody>
        Tandoori grilled chicken pieces in creamy ginger, tomato butter sauce
      </CardBody>
    </Card>
  );
};

export default MenuCard;
