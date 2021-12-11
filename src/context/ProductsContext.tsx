import React, { useState } from "react";

const defaultValues: ProductsContextType = {
  products: [],
  fetchProducts: () => { },
};

export const ProductsContext = React.createContext<ProductsContextType>(defaultValues)

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultValues.products);


  const fetchProducts = async () => {
    let response = await fetch('http://localhost:3001/api/products/');
    if (response.ok) {
      let data = await response.json();
      setProducts(data);
    } else {
      alert("Error HTTP: " + response.status);
    }
  }





  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
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
  fetchProducts: () => void;
};

