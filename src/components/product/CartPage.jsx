import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useFetchCart } from "../../custom-hooks/useDataFetch";

const Cart = () => {
  const { data: cartItems = [], isLoading, isError } = useFetchCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Loading your cart...</h2>
      </div>
    );
  }

  if (isError || cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">
          {isError ? "Failed to load your cart" : "Your cart is empty"}
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-taskPrimary text-taskWhite py-2 px-4 rounded hover:bg-taskPrimary"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>
                ${item.price.toFixed(2)} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <Button
              onClick={() => console.log("Implement remove functionality")}
              className="bg-red-500 text-taskWhite py-1 px-3 rounded hover:bg-red-600"
              label="Remove"
            />
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h3 className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</h3>
        <Button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-taskPrimary text-taskWhite py-2 px-4 rounded hover:bg-taskPrimary"
          label="Proceed to Checkout"
        />
        <Button
          onClick={() => console.log("Implement clear cart functionality")}
          className="mt-4 ml-4 bg-gray-500 text-taskWhite py-2 px-4 rounded hover:bg-gray-600"
          label="Clear Cart"
        />
      </div>
    </div>
  );
};

export default Cart;
