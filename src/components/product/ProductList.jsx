import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading products...</p>;

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       
    
    <div className="container mx-auto p-4 ">
      <div className="flex flex-wrap -m-4 ">
        {currentProducts.map((product) => (
          <div key={product.id} className="p-4 md:w-1/4 ">
            <div className="h-full border-2 border-gray-200 bg-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={product.image}
                alt={product.title}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {product.category.toUpperCase()}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {product.title}
                </h1>
                <p className="leading-relaxed mb-3">
                  {product.description.substring(0, 100)}...
                </p>
                <div className="flex items-center flex-wrap">
                  {/* Add Price Here */}
                  <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    ${product.price}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-indigo-500 inline-flex items-center ml-auto"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 ${
              i + 1 === currentPage
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default ProductList;
