import { itemList } from "../components/itemList"

{/*
  - Add functionality to the list of each product, so when the user clicks a product it renders the images
  - Probably do that by using react-router-dom, check NavBar for more details
  */}



const Products = () => {
  return (
    <section>
 {/* List with different type of products */}
<div>
       
        <ul>
          {itemList}
        </ul>
      </div>

      <div>
        {/* Render selected product on a grid */}
      </div>

    </section>
  );
}

export default Products;