import { ProductsContext } from 'context/ProductsContext';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import s from './Table.module.css';

export const Products: React.FC<RouteComponentProps> = () => {
  const { products, fetchProducts, addProduct, removeProduct } = useContext(ProductsContext);
  const [upOrDown, setUpOrDown] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedItems = () => {
    let sortingItems = [...products];
    if (upOrDown.length !== 0) {
      if (upOrDown[0] === 'price') {
        upOrDown[1] === 'asc'
          ? sortingItems.sort((a, b) => {
              if (a.price < b.price) {
                return -1;
              }
              if (a.price > b.price) {
                return 1;
              }
              return 0;
            })
          : sortingItems.sort((a, b) => {
              if (a.price < b.price) {
                return 1;
              }
              if (a.price > b.price) {
                return -1;
              }
              return 0;
            });
      } else {
        upOrDown[1] === 'asc'
          ? sortingItems.sort((a, b) => {
              if (a.category.name < b.category.name) {
                return -1;
              }
              if (a.category.name > b.category.name) {
                return 1;
              }
              return 0;
            })
          : sortingItems.sort((a, b) => {
              if (a.category.name < b.category.name) {
                return 1;
              }
              if (a.category.name > b.category.name) {
                return -1;
              }
              return 0;
            });
      }
    }
    return sortingItems;
  };

  return (
    <div className={s.tableWrapper}>
      <table>
        <tbody>
          <tr className={s.tr1}>
            <th>
              CATEGORY
              <button
                onClick={() => {
                  setUpOrDown(['category', 'desc']);
                }}
              >
                △
              </button>
              <button
                onClick={() => {
                  setUpOrDown(['category', 'asc']);
                }}
              >
                ▽
              </button>
            </th>
            <th>NAME</th>
            <th>
              PRICE
              <button
                onClick={() => {
                  setUpOrDown(['price', 'desc']);
                }}
              >
                △
              </button>
              <button
                onClick={() => {
                  setUpOrDown(['price', 'asc']);
                }}
              >
                ▽
              </button>
            </th>
            <th>ACTIONS</th>
          </tr>
          {sortedItems().map((product) => {
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
