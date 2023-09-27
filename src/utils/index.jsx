import axios from "axios";
const URL = "https://strapi-store-server.onrender.com/api";
export let customFetch = axios.create({
  baseURL: URL,
});

export const formatPrice = (price) => {
  const dollarAmout = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarAmout;
};
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amout = index + 1;
    return (
      <option key={amout} value={amout}>
        {amout}
      </option>
    );
  });
};
