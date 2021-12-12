import React, { useState } from 'react';

const defaultValues: ProductsContextType = {
  products: [],
  cartItems: [],
  addProduct: () => { },
  removeProduct: () => { },
  removeAllProducts: () => { },
  fetchProducts: () => { },
};

export const ProductsContext = React.createContext<ProductsContextType>(defaultValues);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultValues.products);
  const [cartItems, setCartItems] = useState<CartItem[]>(defaultValues.cartItems);

  const fetchProducts = async () => {
    let response = await fetch('http://localhost:3001/api/products/');
    if (response.ok) {
      let data = await response.json();
      setProducts(data);
    } else {
      alert('Error HTTP: ' + response.status);
    }
  };

  const addProduct = (newItem: Product) => {
    setCartItems((prevItems) => {
      const findItem = prevItems.find((item) => item.id === newItem.id);

      if (findItem) {
        return prevItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeProduct = (productId: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === productId) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItem[]),
    );
  };

  const removeAllProducts = (productId: number) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId))
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartItems,
        fetchProducts,
        addProduct,
        removeProduct,
        removeAllProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  category: Category;
  quantity: number;
  price: number;
}

interface Category {
  id: string;
  name: string;
}

export type ProductsContextType = {
  products: Product[];
  cartItems: CartItem[];
  fetchProducts: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  removeAllProducts: (id: number) => void;
};
