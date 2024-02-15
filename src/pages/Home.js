import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product/ProductList";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}
export default Home;
