import { ProductsContext } from 'context/ProductsContext';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

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
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              CATEGORY
              <button
                onClick={() => {
                  setUpOrDown(['category', 'asc']);
                }}
              >
                asc
              </button>
              <button
                onClick={() => {
                  setUpOrDown(['category', 'desc']);
                }}
              >
                desc
              </button>
            </th>
            <th>NAME</th>
            <th>
              PRICE
              <button
                onClick={() => {
                  setUpOrDown(['price', 'asc']);
                }}
              >
                asc
              </button>
              <button
                onClick={() => {
                  setUpOrDown(['price', 'desc']);
                }}
              >
                desc
              </button>
            </th>
            <th>ACTIONS</th>
          </tr>
          {sortedItems().map((product) => {
            return (
              <tr key={product.id}>
                <td> {product.category.name}</td>
                <td> {product.name}</td>
                <td>${product.price}</td>
                <td>
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
