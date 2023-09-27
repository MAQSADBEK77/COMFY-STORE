import Filters from "../components/Filters";
import { ProductContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch("/products", { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, params, meta };
};
function Products() {
  return (
    <div>
      {/* Filters */}
      <Filters />
      {/* ProductsContainer */}
      <ProductContainer />
      {/* PaginationsContainer */}
      <PaginationContainer />
    </div>
  );
}

export default Products;
