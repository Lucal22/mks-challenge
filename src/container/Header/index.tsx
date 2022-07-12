import React from 'react';
import cartIcon from '../assets/cartIcon.svg';
import Cart from '../Cart';

import { Container, Logo, CartButton } from './styled';

export default function Header() {
  return (
    <Container>
      <Logo href="/">
        <h1>MKS</h1>
        <small>Sistemas</small>
      </Logo>
      <CartButton>
        <div>
          <img src={cartIcon} alt="Carrinho de compras" />
        </div>
        <div>
          <p>0</p>
        </div>
      </CartButton>
      <Cart />
    </Container>
  );
}
