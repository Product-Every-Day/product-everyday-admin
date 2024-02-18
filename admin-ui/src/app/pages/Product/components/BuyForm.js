import React, { Fragment, useState } from 'react'
import {
    Button,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { showSnackBar } from '../../../redux/actions/snackBarActions';
import { put, remove, uploadImage, patch } from '../../../services/Common';
import { Image } from 'antd';
import { BACKEND_URL } from '../../../core/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { getPublicIdFromImageUrl } from '../../../core/utils';
import Typography from '@mui/material/Typography';
import Carousel from "react-material-ui-carousel";
import styles from './BuyForm.module.css';
import { addToCart } from '../../../redux/actions/cartActions';

const BuyForm = ({ product, setloading, fetchAllProducts }) => {
    const dispatch = useDispatch()
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [deleteImgUrl, setdeleteImgUrl] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const increaseQuantity = () => {
        if (product.quantity <= quantity) return;
    
        const qty = quantity + 1;
        setQuantity(qty);
    };
    
    const decreaseQuantity = () => {
        if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
    };
   

    const addToCartHandler = () => {
        dispatch(addToCart(product,quantity))
    }
    // const addToCart = async () => {
    //     setloading(true);
    //     const url = BACKEND_URL + '/order/cart/add/65b158e7eb923569b3399810'
        
    //     const productPayload = {
    //         orderItems: [
    //             {
    //                 sku: product.sku,
    //                 productName: product.name,
    //                 productPrice: product.price,
    //                 quantity: quantity
    //             }
    //         ]};
    //     console.log(productPayload);
    //     const data = await patch(url, productPayload)
    //     if (data && data?.success === true) {
    //         dispatch(showSnackBar({ msg: "Add to Cart Success", type: "success" }))
    //         fetchAllProducts()
    //     } else {
    //         dispatch(showSnackBar({ msg: `Add to Cart Fail ${data.exception_reason}`, type: "error" }))
    //     }
    //     setloading(false);
    // }

    return (
        <Fragment>
            <div className={styles.ProductDetails}>
                <div className={styles.ProdctD}>
                    <img src={"https://5.imimg.com/data5/SELLER/Default/2022/1/SE/PE/DX/145753905/maggie-1000x1000.jpg"} alt={product.name} />
                </div>
                <div>
                    <div className={styles['detailsBlock-1']}>
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    
                    <div className={styles['detailsBlock-3']}>
                        <h1>{`₹${product.price}`}</h1>
                        <div className={styles['detailsBlock-3-1']}>
                            <div className={styles['detailsBlock-3-1-1']}>
                                <button onClick={decreaseQuantity}>-</button>
                                <input readOnly type="number" value={quantity}  />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <button
                                disabled={product.Stock < 1 ? true : false}
                                onClick={addToCartHandler}
                            >
                            Add to Cart
                            </button>
                        </div>
                        <p>
                        Status:
                        <b className={product.quantity < 1 ? "redColor" : "greenColor"}>
                        {product.quantity < 1 ? "OutOfStock" : "InStock"}
                        </b>
                        </p>
                    </div>
                    <div className={styles.detailsBlock-4}>
                        Description : <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BuyForm