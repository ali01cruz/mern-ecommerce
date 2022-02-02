import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductComponentCrud from '../components/ProductComponentCrud';
import { listProducts } from '../redux/actions/productActions';
import {Button, Table} from 'react-bootstrap';


const ProductPage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const params = useParams();
    const { keyword } = params;
    const pageNumber = params.pageNumber || 1;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);


    return (
        <>
            <h1>Listado Productos</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                <Button variant="primary" className='mb-4'>Nuevo Producto</Button>{' '}

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Opciones</th>
                        </tr>
                    </thead>
                    
                        {products.map((product) => (
                            
                            <ProductComponentCrud product={product} />
                            
                        ))}
                    
                    </Table>
                </>
            )}
        </>
    );
};


export default ProductPage;
