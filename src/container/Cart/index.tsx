import React from 'react';
import {
  Container,
  Header,
  CartContent,
  CartItems,
  BigX,
  SmallX,
  Img,
  Name,
  Qtd,
  Price,
  Dicrease,
  Increase,
  CartResult,
  CartConfirm,
} from './styled';
import bigX from '../assets/bigX.svg';
import smallX from '../assets/smallX.svg';

export default function Cart() {
  return (
    <Container>
      <CartContent>
        <Header>
          <h2>
            Carrinho
            <br />
            de compras
          </h2>
          <BigX>
            <img src={bigX} alt="Fechar carrinho" />
          </BigX>
        </Header>
        <CartItems>
          <Img>x</Img>
          <Name>Apple Watch Series 4 GPS</Name>
          <Qtd>
            <Dicrease type="button">-</Dicrease>
            <p>1</p>
            <Increase type="button">+</Increase>
          </Qtd>
          <Price>R$399</Price>
          <SmallX>
            <img src={smallX} alt="Cancelar compra do produto" />
          </SmallX>
        </CartItems>
        <CartResult>
          <div>
            <p>Total:</p>
            <p>R$399</p>
          </div>
        </CartResult>
      </CartContent>
      <CartConfirm>Finalizar Compra</CartConfirm>
    </Container>
  );
}
