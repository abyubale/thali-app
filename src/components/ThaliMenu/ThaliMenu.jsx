import { thaliMenu } from "../../constant/constant";
import ThaliCard from "../ThaliCard/ThaliCard";

const ThaliMenu = () => {
  const items = thaliMenu.map((item, index) => (
    <ThaliCard
      key={index}
      title={item.item}
      description={item.description}
      price={item.price}
      category={item.category}
      id={item.id}
    />
  ));
  return <>{items}</>;
};

export default ThaliMenu;
