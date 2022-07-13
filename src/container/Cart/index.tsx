import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {openCart} from '../../features/cart';
import {
  Container,
  Header,
  CartContent,
  BigX,
  CartResult,
  CartConfirm,
} from './styled';
import bigX from '../assets/bigX.svg';
import { CartProducts } from '../../types/products';
import ItemList from './components/ItemList';


export default function Cart() {
  const onCart = useSelector((state:CartProducts) => state.cartProducts.value)
  const unique = [...new Set(onCart)];

  const dispatch = useDispatch()

  return (
   <Container>
    <CartContent>
        <Header>
          <h2>
            Carrinho
            <br />
            de compras
          </h2>
          <BigX
          onClick={()=>{dispatch(openCart(false))}}
          >
            <img src={bigX} alt="Fechar carrinho" />
          </BigX>
        </Header>
        {unique.map((product:any)=>{
          if(product != undefined){
            return(
              <ItemList
              key={product.id}
              photo={product.photo}
              name={product.name}
              price={product.price}
              id ={product.id}
              />
            )
          }else{
            return(null)
          }
          })}
        <CartResult>
          <div>
            <p>Total:</p>
            <p>0</p>
          </div>
        </CartResult>
      </CartContent>
      <CartConfirm
      onClick={()=>console.log('compra realizada')}
      >Finalizar Compra</CartConfirm>
    </Container>
  );
}
