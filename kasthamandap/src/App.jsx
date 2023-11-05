import MenuCard from "./components/MenuCard";
import OpeningHours from "./components/OpeningHours";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <>
      <div>App</div>
      <Button size="small">Book a Table</Button>
      <Button size="default">Book a Table</Button>
      <Button size="large">Book a Table</Button>
      <MenuCard />
      <OpeningHours />
    </>
  );
};

export default App;
