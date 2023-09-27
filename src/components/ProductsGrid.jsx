import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
function ProductsGrid() {
  let { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        let { image, price, title } = product.attributes;
        let dollarAmout = formatPrice(price);
        return (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="card w-80 shadow-xl hover:shadow-2xl transition duration-300 m-auto">
            <figure className="px-4 pt-4 ">
              <img
                src={image}
                className="rounded-xl h-64 md:h-48 w-full object-cover hover:scale-110 transition duration-300"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title capitalize tracking-wider">{title}</h3>
              <p className="text-secondary">{dollarAmout}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
