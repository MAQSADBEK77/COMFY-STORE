import SectionTitle from "../components/SectionTitle";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
function Cart() {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  function removeCart(cartID) {
    dispatch(removeItem({ cartID }));
  }
  const changeAmount = (e, cartID) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  // console.log(JSON.parse(localStorage.getItem("cart")));
  if (state.cartTotal) {
    return (
      <>
        <SectionTitle text="Shopping Cart" />
        <div className="pt-7">
          <div className="mt-10 flex justify-between gap-4 md:flex-nowrap flex-wrap">
            <div className="cards">
              {state.cartItems.map((cart) => {
                return (
                  <div
                    key={cart.cartID}
                    className="m-auto w-full mb-12 flex gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
                    <img
                      src={cart.image}
                      alt="chic chair"
                      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                    />
                    <div className="ml-2 sm:ml-16 sm:w-48">
                      <h3 className="capitalize font-medium">{cart.title}</h3>
                      <h4 className="mt-2 capitalize text-sm text-neutral-content">
                        {cart.company}
                      </h4>
                      <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                        color :
                        <span
                          className="badge badge-sm"
                          style={{ background: cart.productColor }}></span>
                      </p>
                    </div>
                    <div className="ml-4 sm:ml-12">
                      <div className="form-control max-w-xs">
                        <label htmlFor="amount" className="label p-0">
                          <span className="label-text">Amount</span>
                        </label>
                        <select
                          name="amount"
                          id="amount"
                          defaultValue={cart.amount}
                          onChange={(e) => changeAmount(e, cart.cartID)}
                          className="mt-2 select select-base select-bordered select-xs">
                          {generateAmountOptions(cart.amount + 10)}
                        </select>
                      </div>
                      <button
                        className="mt-4 link link-primary link-hover text-sm"
                        onClick={() => removeCart(cart.cartID)}>
                        remove
                      </button>
                    </div>
                    <p className="font-medium ml-2 text-sm sm:text-xl sm:ml-16 ">
                      {formatPrice(cart.price)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="m-auto w-[340px] card bg-base-200">
              <div className="card-body gap-6">
                <p className="flex justify-between text-xs border-b border-primary pb-2">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    {formatPrice(state.cartTotal)}
                  </span>
                </p>
                <p className="flex justify-between text-xs border-b border-primary pb-2">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {formatPrice(state.shipping)}
                  </span>
                </p>
                <p className="flex justify-between text-xs border-b border-primary pb-2">
                  <span>Tax</span>
                  <span className="font-medium">{formatPrice(state.tax)}</span>
                </p>
                <p className="flex justify-between text-sm mt-2 pb-2">
                  <span>Order Total</span>
                  <span className="font-medium">
                    {formatPrice(state.orderTotal)}
                  </span>
                </p>
              </div>
              <a
                className="w-10/12 m-auto btn btn-primary btn-block mb-8"
                href="/login">
                please login
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <SectionTitle text="Your Cart Is Empty 😔" />;
  }
}

export default Cart;
