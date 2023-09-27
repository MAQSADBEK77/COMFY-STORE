import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return request.data.data;
};
function SingleProduct() {
  const product = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmout = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  function handleAmount(e) {
    setAmount(parseInt(e.target.value));
  }
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-6">
        <img
          src={image}
          className="w-full  h-96 rounded-xl lg:w-[500px] object-cover"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h3 className="mt-3 text-2xl text-neutral-400 tracking-tighter capitalize">
            {company}
          </h3>
          <p className="mt-4 text-xl">{dollarAmout}</p>
          <p className="mt-3 text-justify">{description}</p>
          <div className="form-control w-full max-w-xs mt-6">
            <div className="flex gap-3 mt-2">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Colors:
              </h4>
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge h-6 w-6 rounded-full hover:scale-110 transition-all ${
                      color === productColor ? "border-2 border-secondary" : ""
                    }`}
                    onClick={() => setProductColor(color)}
                    style={{ background: color }}></button>
                );
              })}
            </div>
            <label className="mt-5 flex flex-col gap-2">
              <span>Amount</span>
              <select
                id="amount"
                value={amount}
                onChange={handleAmount}
                className="select select-primary w-full max-w-xs">
                {generateAmountOptions(20)}
              </select>
            </label>
            <button
              onClick={addToCart}
              className="btn btn-secondary uppercase mt-10">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
