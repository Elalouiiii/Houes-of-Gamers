import React from 'react'
import casque from '../../assets/images/products/casque-msi.jpg'
import { RiDeleteBin6Fill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch } from 'react-redux';
import { addProduct, decrement, deletOneCart } from '../../store/features/ShopSlice';




export default function OneCard({item}) {
    const dispatch = useDispatch();
    return (
        <>

            <article className='canvas'>
                <img src={item.cover} alt='image'></img>
                <div>
                    <h6>{item.name}</h6>
                    <p>{item.quantity}<span>*</span>{item.price} DT</p>
                    <span>{item.price*item.quantity} DT</span>
                </div>
                <div className='counter'>
                    <RiDeleteBin6Fill style={{ fontSize: '30px' }}  onClick={()=>dispatch( deletOneCart(item))}/>
                    <div className='control'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="light" onClick={()=>dispatch(decrement(item))}>-</Button>
                            <Button variant="light">{item.quantity}</Button>
                            <Button variant="light" onClick={()=>dispatch(addProduct(item))}>+</Button>
                        </ButtonGroup>
                    </div>

                </div>
            </article>
        </>

    )
}
