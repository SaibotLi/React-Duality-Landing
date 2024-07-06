import itemList from "../components/itemList";

{/*
  - Add functionality to the list of each product, so when the user clicks a product it renders the images
  - Probably do that by using react-router-dom, check NavBar for more details
  */}

const Products = () => {
  return (
    <section>

 {/* 
 - Render a list with different type of products, this should beat flex-start displayed on a column, that's why i chose <aside> 'cause it's on the left
 */}

 <aside>
  <ul>
    {itemList}
  </ul>
  </aside>
  
  <div>

{/* 
- Render selected product on a grid, this should be centered and on a row of 1-2-3-4 products depending size of the screen
- Maybe this should be a <picture> instead of a <div> and inside i should render the <img> based on a map just as we did with list
- We used <aside> above because it was aside, what would this be? <main> is already declared at App, maybe it's okay to leave it like <picture> <img /> </picture>
*/}

  </div>
  
</section>
  );
}

export default Products;