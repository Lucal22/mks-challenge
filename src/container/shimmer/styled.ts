import styled from 'styled-components';
import {
  bgGrayColor,
  bgWhiteColor,
} from '../../styles/Colors';

export const Container = styled.section`
  max-width: 938px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  margin-top: 101px;
  margin-bottom: 127px;
  display: grid;
  row-gap: 31px;
  column-gap: 22px;
  grid-template-columns: repeat(4, 1fr);

  @media(max-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 615px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Product = styled.div`
  width: 218px;
  height: 100%;
  border-radius: 8px;
  background-color: ${bgWhiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

`;

export const Card = styled.div`
  padding: 18px 11.56px 12px 14px;
  height: 282px;
`;

export const Image = styled.div`
 width: 100%;
  background-color: ${bgGrayColor};
  height: 158px;
`;

export const Description = styled.div`
margin-top: 10px;
margin-bottom: 10px;
height: 80px;
   background-color: ${bgGrayColor};
`;

export const Button = styled.div`
width: 100%;
height: 32px;
background-color: ${bgGrayColor};
`
