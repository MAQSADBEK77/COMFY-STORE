import { useLoaderData } from "react-router-dom";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormChexbox";

function Filters() {
  const { products, params, meta } = useLoaderData();
  const { categories, companies, pagination } = meta;
  const { search, company, category, shipping, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput label="Search product" name="search" size="input-sm" />
      {/* CATEGORY */}
      <FormSelect
        label="Select Category"
        size="btn-sm"
        list={categories}
        name="categories"
      />
      {/* COMPANY  */}
      <FormSelect
        label="Select Company"
        size="btn-sm"
        list={companies}
        name="companies"
      />
      {/* SORT BY */}
      <FormSelect
        label="Select Company"
        size="btn-sm"
        list={["a-z", "z-a", "low", "high"]}
        name="companies"
      />
      {/* PRICERANGE */}
      <FormRange
        label="select price"
        name="price"
        price={price}
        size="range-sm"
      />
      {/* SHIPPING CHEXBOX  */}
      <FormCheckbox
        size="input-sm"
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button className="btn btn-primary btn-sm">Search</button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
}
0;

export default Filters;
