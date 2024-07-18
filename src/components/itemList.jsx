import { productItems } from "../constants";

const ItemList = ({ onSelect }) => {
  return (
    <ul className="w-full flex-col">
      {productItems.map((item, index) => (
        <li
          className="relative flex justify-center px-3 py-2 my-1 font-medium rounded-md cursor-pointer transition-colors"
          key={index}
          onClick={() => onSelect(item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;