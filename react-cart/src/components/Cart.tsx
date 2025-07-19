import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();

  return (
    <div className="bg-white shadow-lg border-t fixed top-16 right-4 w-full max-w-md z-50 p-4">
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
              <div className="flex-1 px-2">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-1">
                <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-200">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-200">+</button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-600 hover:underline"
              >
                ×
              </button>
            </div>
          ))}
          <div className="text-right font-semibold mt-4">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
      <button className="mt-4 text-sm text-blue-600" onClick={onClose}>
        Close Cart
      </button>
    </div>
  );
};

export default Cart;
