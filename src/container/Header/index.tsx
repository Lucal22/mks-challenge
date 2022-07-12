import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/cartIcon.svg';
import Cart from '../Cart';
import {openCart} from '../../features/cart';

import { Container, Logo, CartButton } from './styled';
import { ReducerState } from '../../types/reducer';


export default function Header() {
  const dispatch = useDispatch()
  const cartOpen = useSelector((state: ReducerState) => state.cart.value)

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
          <p>0</p>
        </div>
      </CartButton>
      {cartOpen && <Cart
      />}
    </Container>
  )
}
