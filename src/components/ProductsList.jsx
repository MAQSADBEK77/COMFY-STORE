import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
function ProductsList() {
  let { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-y-8">
      {products.map((product) => {
        let { image, price, title, company } = product.attributes;
        let dollarAmout = formatPrice(price);
        return (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="p-8 rounded-lg group flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-500">
            <img
              src={image}
              alt={title}
              className="h-28 w-28 sm:h-36 sm:w-36 object-cover group-hover:scale-110 transition duration-300 "
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-mendium text-lg">{title}</h3>
              <h4 className="capitalize font-mendium text-lg text-neutral-400">
                {company}
              </h4>
            </div>
              <p className="capitalize font-mendium ml-0 sm:ml-auto text-lg">
                {dollarAmout}
              </p>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsList;
