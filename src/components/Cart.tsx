import { ProductsContext } from 'context/ProductsContext';
import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';

export const Cart: React.FC<RouteComponentProps> = () => {
  const { cartItems, addProduct, removeProduct } = useContext(ProductsContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h3>No items in the Cart</h3>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>CATEGORY</th>
              <th>NAME</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
            {cartItems.map((product) => {
              return (
                <tr key={product.id}>
                  <td> {product.category.name}</td>
                  <td> {product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${+(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeProduct(product.id)}>-</button>
                    Remove
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
