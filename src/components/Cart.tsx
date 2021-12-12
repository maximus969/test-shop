import { ProductsContext } from 'context/ProductsContext';
import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import s from './Table.module.css';

export const Cart: React.FC<RouteComponentProps> = () => {
  const { cartItems, addProduct, removeProduct, removeAllProducts } = useContext(ProductsContext);

  return (
    <div className={s.tableWrapper}>
      {cartItems.length === 0 ? (
        <h3>No items in the Cart</h3>
      ) : (
        <table>
          <tbody>
            <tr className={s.tr1}>
              <th>CATEGORY</th>
              <th>NAME</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
            {cartItems.map((product) => {
              return (
                <tr key={product.id} className={s.tr2}>
                  <td className={s.td1}> {product.category.name}</td>
                  <td className={s.td1}> {product.name}</td>
                  <td className={s.td1}>{product.quantity}</td>
                  <td className={s.td1}>${+(product.price * product.quantity).toFixed(2)}</td>
                  <td className={s.td1}>
                    <button onClick={() => removeProduct(product.id)}>-</button>
                    <button onClick={() => removeAllProducts(product.id)}>Remove</button>
                    <button onClick={() => addProduct(product)}>+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
