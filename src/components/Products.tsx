import { ProductsContext } from "context/ProductsContext";
import React, { useContext, useEffect } from "react"
import { RouteComponentProps } from 'react-router';


export const Products: React.FC<RouteComponentProps> = () => {

  const { products, fetchProducts } = useContext(ProductsContext);


  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>
    <table>
      <tbody>
        <tr>
          <th>
            CATEGORY
          </th>
          <th>NAME</th>
          <th>
            PRICE
          </th>
          <th>ACTIONS</th>
        </tr>
        {
          products.map(product => {
            return (
              <tr key={product.id}>
                <td> {product.category.name}</td>
                <td> {product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button>-</button>
                  Select
                  <button>+</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
}

