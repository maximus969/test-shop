import { Product, ProductsContext } from 'context/ProductsContext';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import s from './Table.module.css';

export const Products: React.FC<RouteComponentProps> = () => {
  const { products, fetchProducts, addProduct, removeProduct } = useContext(ProductsContext);
  const [sortedProducts, setSortedProducts] = useState(products);
  const sortProductsCallback = (a: Product, b: Product, property: string, asc: boolean = true): number => {
    const key = property as keyof typeof a;
    const result = a[key] < b[key] ? -1 : 1;
    return asc ? result : -result;
  };
  const sortProducts = (property: string, asc: boolean) =>
    setSortedProducts([...products].sort((a, b) => sortProductsCallback(a, b, property, asc)));

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <div className={s.tableWrapper}>
      <table>
        <tbody>
          <tr className={s.tr1}>
            <th>
              CATEGORY
              <button
                onClick={() => {
                  sortProducts('category.name', false);
                }}
              >
                △
              </button>
              <button
                onClick={() => {
                  sortProducts('category.name', true);
                }}
              >
                ▽
              </button>
            </th>
            <th>
              NAME
              <button
                onClick={() => {
                  sortProducts('name', false);
                }}
              >
                △
              </button>
              <button
                onClick={() => {
                  sortProducts('name', true);
                }}
              >
                ▽
              </button>
            </th>
            <th>
              PRICE
              <button
                onClick={() => {
                  sortProducts('price', false);
                }}
              >
                △
              </button>
              <button
                onClick={() => {
                  sortProducts('price', true);
                }}
              >
                ▽
              </button>
            </th>
            <th>ACTIONS</th>
          </tr>
          {sortedProducts.map((product) => {
            return (
              <tr key={product.id} className={s.tr2}>
                <td className={s.td1}> {product.category.name}</td>
                <td className={s.td1}> {product.name}</td>
                <td className={s.td1}>${product.price}</td>
                <td className={s.td1}>
                  <button onClick={() => removeProduct(product.id)}>-</button>
                  Select
                  <button onClick={() => addProduct(product)}>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
