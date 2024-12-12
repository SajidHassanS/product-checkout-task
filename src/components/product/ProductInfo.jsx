import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useFetchProduct } from "../../custom-hooks/useFetchProductByID"; // Import the custom hook
import { useAddToCart } from "../../custom-hooks/useAddToCart"; // Import the Add to Cart hook
import Button from "../Button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  
  const { data: product, isLoading, isError } = useFetchProduct(id);


  const { mutate: addToCart, isLoading: isAddingToCart } = useAddToCart();

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addToCart({ productId: product.id, quantity });
    } else {
      toast.error("Please enter a valid quantity.");
    }
  };

  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  if (isError || !product) {
    return (
      <div className="text-center">
        <p>
          {isError ? "Error loading product details!" : "Product not found!"}
        </p>
        <Button
          onClick={() => navigate("/products")}
          className="flex text-taskWhite bg-taskPrimary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          label="Back to Products"
        />
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/3 w-full lg:h-96 h-64"
            src={product.image}
            onError={(e) => (e.target.src = "/default-image.png")}
          />
          <div className="lg:w-1/2 lg:flex flex-col gap-3 items-start w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category.toUpperCase()}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <p className="title-font font-medium text-2xl text-gray-900">
              ${product.price}
            </p>
            <div className="flex items-center gap-3">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded px-3 py-2 w-20"
              />
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`flex text-taskWhite bg-taskPrimary border-0 py-2 px-6 focus:outline-none rounded ${
                isAddingToCart
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-600"
              }`}
              label="Add to Cart"
            />
            <Button
              onClick={() => navigate("/cart")}
              className="flex text-taskWhite bg-gray-400 border-0 py-2 px-7 focus:outline-none hover:bg-gray-600 rounded"
              label="Go to Cart"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductInfo;
