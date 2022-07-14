import React from 'react'
import { Card, Button, Description, Grid, Product, Image } from './styled';

const numbers = ['1','2','3','4','5','6','7','8']

export default function Skeleton() {
  return (
    <>
          <Grid>
         {numbers.map((number)=> {
          return (
            <Product key={number}>
              <Card>
                <Image>
                </Image>
                <Description>
                </Description>
              </Card>
              <Button />
            </Product>
          );
        })}
      </Grid>
    </>
  )
}

