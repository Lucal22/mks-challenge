import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/cartIcon.svg';
import Cart from '../Cart';
import {openCart} from '../../features/cart';

import { Container, Logo, CartButton } from './styled';
import { ReducerState } from '../../types/reducer';
import { CartProducts } from '../../types/products';


export default function Header() {
  const dispatch = useDispatch()
  const cartOpen = useSelector((state: ReducerState) => state.cart.value)
  const onCart = useSelector((state:CartProducts) => state.cartProducts.value)

  const unique = [...new Set(onCart)];

  return (
    <Container>
      <Logo href="/">
        <h1>MKS</h1>
        <small>Sistemas</small>
      </Logo>
      <CartButton onClick={() =>{dispatch(openCart(true))}}>
        <div>
          <img src={cartIcon} alt="Carrinho de compras" />
        </div>
        <div>
          <p>{unique.length}</p>
        </div>
      </CartButton>
      {cartOpen && <Cart
      />}
    </Container>
  )
}
