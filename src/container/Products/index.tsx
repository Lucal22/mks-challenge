import React from 'react';
import buyIcon from '../assets/buyIcon.svg';

import { Container, Grid, Product, Card, Description, Image } from './styled';

const prices = [100, 1200, 300, 600, 5000, 3200, 400, 432];

export default function Products() {
  return (
    <Container>
      <Grid>
        {prices.map((price, key) => {
          return (
            <Product key={key}>
              <Card>
                <Image>
                  <img src="" alt="" />
                </Image>
                <Description>
                  <div>
                    <h2>Apple Watch Series 4 GPS</h2>
                    <span>R${price}</span>
                  </div>
                  <p>Redesigned from scratch and completely revised.</p>
                </Description>
              </Card>
              <button type="button">
                <img src={buyIcon} alt="Ícone de compra" />
                Comprar
              </button>
            </Product>
          );
        })}
      </Grid>
    </Container>
  );
}
