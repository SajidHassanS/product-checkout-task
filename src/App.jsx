import "./App.css";
import QueryProvider from "./data-fetching/QueryProvider";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";


function App() {

  
  return (
    <QueryProvider>
      <CartProvider>
        <Header/>
      <AppRoutes />
    </CartProvider>
     
    </QueryProvider>
  );
}

export default App;
