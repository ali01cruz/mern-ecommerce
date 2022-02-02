import React from 'react';
import { Button } from 'react-bootstrap';

const ProductComponentCrud = ({product}) => {
  return (
      <tbody>
        <tr>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>
          <Button variant="success">Editar</Button>{' '}
          <Button variant="danger">Eliminar</Button>{' '}
          </td>
        </tr>
      </tbody>
  );
};

export default ProductComponentCrud;
