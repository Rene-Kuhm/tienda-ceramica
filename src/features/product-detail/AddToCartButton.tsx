import { useState } from 'react';

interface Props {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border-2 border-gray-300 rounded-lg">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-2 hover:bg-gray-100 transition-colors"
          aria-label="Disminuir cantidad"
        >
          -
        </button>
        <span className="px-4 py-2 min-w-12 text-center font-semibold">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2 hover:bg-gray-100 transition-colors"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
        onClick={addToCart}
        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-emerald-600 text-white hover:bg-emerald-700'
        }`}
      >
        {added ? '✓ Agregado al carrito' : 'Agregar al carrito'}
      </button>
    </div>
  );
}
