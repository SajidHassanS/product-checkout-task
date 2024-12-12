import "./App.css";
import QueryProvider from "./data-fetching/QueryProvider";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <QueryProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </QueryProvider>
  );
}

export default App;
