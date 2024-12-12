export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};


export const fetchCartItems = async () => {
    const res = await fetch("https://fakestoreapi.com/carts");
    if (!res.ok) throw new Error("Failed to fetch cart data");
    const data = await res.json();
  
    const userCart = data.find((cart) => cart.userId === 1);
    if (userCart) {
      const productsWithDetails = await Promise.all(
        userCart.products.map(async (product) => {
          const productRes = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
          if (!productRes.ok) throw new Error("Failed to fetch product details");
          const productData = await productRes.json();
          return { ...productData, quantity: product.quantity };
        })
      );
      return productsWithDetails;
    } else {
      return [];
    }
  };

  export const fetchProductById = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product data");
    return res.json();
  };


  export const addToCart = async ({ productId, quantity }) => {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1, // Replace with actual user ID
        date: new Date().toISOString().split("T")[0], // Current date
        products: [
          {
            productId,
            quantity,
          },
        ],
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to add to cart");
    }
  
    return response.json();
  };
