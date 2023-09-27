import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";
let url = "/products?featured=true";
export const loader = async () => {
  const request = await customFetch(url);
  const products = request.data.data;
  return { products };
};
function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
