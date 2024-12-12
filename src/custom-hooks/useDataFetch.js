import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fetchCartItems } from "../apis/products";

export const useFetchCart = () => {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: fetchCartItems,
    onSuccess: () => {
      toast.success("Cart data fetched successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to fetch cart data");
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};
