import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
  
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="p-4 max-w-6xl mx-auto">
            <ProductList />
          </main>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
