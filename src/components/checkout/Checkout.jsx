import React from "react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    alert("Payment successful!");
    clearCart(); // Clear cart after payment
  };

  return (
    <div className="font-[sans-serif] bg-white p-4">
      <div className="md:max-w-5xl max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 max-md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Make a payment
            </h2>
            <p className="text-gray-800 text-sm mt-4">
              Complete your transaction swiftly and securely with our
              easy-to-use payment process.
            </p>

            <form
              className="mt-8 max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Cardholder's Name"
                  className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                />
                <input
                  type="number"
                  placeholder="Card Number"
                  className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                  />
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="mt-8 w-40 py-3.5 text-sm   text-white rounded-md   tracking-wide
                
                bg-indigo-500   hover:bg-indigo-600
                "
              >
                Pay ${totalAmount.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-3xl font-extrabold text-gray-800">
              ${totalAmount.toFixed(2)}
            </h2>
            <ul className="text-gray-800 mt-8 space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex flex-wrap gap-4 text-sm">
                  {item.title}{" "}
                  <span className="ml-auto font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
              <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                Total <span className="ml-auto">${totalAmount.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
