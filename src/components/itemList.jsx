import { productItems } from "../constants";

{/*Function that creates a list of each product */}
const itemList = productItems.map((item, index) => (
    <li key={index}>{item.name}</li>
  ));

  export default itemList