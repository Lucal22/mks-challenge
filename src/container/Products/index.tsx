import React, { useEffect, useState } from 'react';
import buyIcon from '../assets/buyIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Product, Card, Description, Image } from './styled';
import { ReducerProducts } from '../../types/reducer';
import  {cartProducts} from '../../features/cart-products';
import {ProductItens} from '../../types/products';
import {getProducts} from '../../features/get-products';
import Skeleton from '../shimmer/Skeleton';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getProducts())
  },[dispatch])

   useEffect(()=>{
     setTimeout(()=>{
       setIsLoading(false);
     }, 1000)
   },[])

  const products = useSelector((state:ReducerProducts) => state.products.products)

 function handleSubmit(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>){
  const infoProduct:ProductItens = products[event.target.value -1];
  setSelectedProduct((prevProduct)=>{
     return [
            ...prevProduct, infoProduct
            ]
       })
     event.preventDefault()
   }
   dispatch(cartProducts(selectedProduct))
  return (
    <Container>
      {isLoading?<Skeleton />:
          products != null || undefined?
          <Grid>
         {Object.entries(products).map((product:any)=> { //fix the type
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
