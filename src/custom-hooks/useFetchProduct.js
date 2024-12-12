import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fetchProducts } from "../apis/products";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    onSuccess: () => {
      toast.success("Products loaded successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to fetch products");
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};
