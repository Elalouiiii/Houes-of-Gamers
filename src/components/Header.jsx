import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import style from '../assets/style/header.module.css'
import { useSelector, useDispatch } from 'react-redux'
import OneCard from '../components/main/OneCard';
import { clear } from '../store/features/ShopSlice';




const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useSelector((state) => state.cart.shopCart)
    const dispatch = useDispatch()

    let total = 0
    cart.map((item) => (
        total = total + (item.price * item.quantity)
    ))

    return (
        <header >
            <Navbar bg='dark' fixed='top'>
                <Container>
                    <Navbar.Brand href="#home" className={style.white}>House of gamers Aloui</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text onClick={handleShow}>
                            <BsCartFill className={style.white} />
                            <Badge pill bg="danger">
                                {cart.length}
                            </Badge>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement='end' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Carte</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.map((carte, index) => (
                        <OneCard key={index} item={carte} />

                    ))}
                    {
                        cart.length == 0 ? <p style={{ textAlign: 'center', position: 'top' }}> Liste produit est vide ! ! !</p>
                            :

                            <div className='clear'>
                                <Button variant="light" onClick={() => dispatch(clear())}> Clear </Button>
                                <p>Subtotal</p>
                                <h5>{total} DT</h5></div>
                    }

                </Offcanvas.Body>

            </Offcanvas>
        </header>
    )
}

export default Header