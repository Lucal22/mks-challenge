import React, { useEffect, useState } from 'react';
import buyIcon from '../assets/buyIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Product, Card, Description, Image } from './styled';
import { ReducerProducts } from '../../types/reducer';
import {getProducts} from '../../features/get-products';

export default function Products() {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getProducts())
  },[dispatch])
  const products = useSelector((state:ReducerProducts) => state.products.products)

  function handleSubmit(event:any){
    console.log(event.target.value)
    console.log('event.target.value')
    event.preventDefault()
  }
  return (
    <Container>

          {products != null || undefined?<Grid>
         {Object.entries(products).map((product:any) => {
          return (
            <Product key={product[1].id}>
              <Card>
                <Image>
                  <img src={product[1].photo} alt="Imagem do produto" />
                </Image>
                <Description>
                  <div>
                    <h2>{product[1].name}</h2>
                    <span>R${product[1].price}</span>
                  </div>
                  <p>{product[1].description}</p>
                </Description>
              </Card>
              <button type="submit" value={product[1].id}
              onClick={(event)=>{handleSubmit(event)}}
              >
                <img src={buyIcon} alt="Ícone de compra" />
                Comprar
              </button>

            </Product>
          );
        })}
      </Grid>
:null}


    </Container>
  );
}
