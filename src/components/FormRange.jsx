import { useState } from "react";
import { formatPrice } from "../utils";
function FormRange({ label, name, size, price }) {
  const step = 100;
  const maxPrice = 10000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">Min: 0$</span>
        <span className="label-text capitalize">
          Max: {formatPrice(maxPrice)}
        </span>
      </label>
    </div>
  );
}

export default FormRange;
