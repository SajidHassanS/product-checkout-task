import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fetchProductById } from "../apis/products";

export const useFetchProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, 
    onError: () => {
      toast.error("Error loading product details. Please try again.");
    },
  });
};
