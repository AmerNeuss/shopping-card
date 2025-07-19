import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
  const { totalQty } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Shop</h1>
        <button
          className="relative"
          onClick={() => setOpen(prev => !prev)}
        >
          🛒
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </button>
      </header>
      {open && <Cart onClose={() => setOpen(false)} />}
    </>
  );
};

export default Header;
