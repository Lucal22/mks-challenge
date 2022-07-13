import React, { useState } from 'react'
import { ProductItens } from '../../../types/products'
import { CartItems, Dicrease, Img, Increase, Name, Price, Qtd, SmallX } from '../styled'
import smallX from '../../assets/smallX.svg';


 export type BuyItens = {
   id: number;
   name: string;
   photo: string;
   price: string;
 }
export default function ItemList({id, name, photo, price }:BuyItens ) {
  const [count, setCount] = useState(1)

  return (
    <CartItems>
              <Img alt='imagem do produto' src={photo} />
              <Name>{name}</Name>
              <Qtd>
                <Dicrease type="button"
                onClick={()=>setCount(count>1?count -1:count)}
                >-</Dicrease>
                <p>{count}</p>
                <Increase type="button"
                onClick={()=>setCount(count +1)}
                >+</Increase>
              </Qtd>
              <Price>R${parseInt(price)*count}</Price>
              <SmallX
              type="submit"
              onClick={()=>console.log('Deletando')}
              >
                <img src={smallX} id={id.toString()} alt="Cancelar compra do produto" />
              </SmallX>
            </CartItems>
  )
}

