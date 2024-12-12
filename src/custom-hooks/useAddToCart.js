import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addToCart } from "../apis/products";

export const useAddToCart = () => {
  return useMutation({
    mutationFn: addToCart,
    onSuccess: (_, { productId, quantity }) => {
      toast.success(`${quantity}x product ID ${productId} added to cart!`);
    },
    onError: (error) => {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
    },
  });
};
