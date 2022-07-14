import styled from 'styled-components';
import { bgBlueColor, bgWhiteColor } from '../../styles/Colors';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${bgBlueColor};
  height: 101px;
  padding: 0 88px;
  @media(max-width: 480px){
    height: 48px;
    padding: 0 30px;
  }
  @media(max-width: 255px){
    padding: 0 10px;

  }
`;

export const Logo = styled.a`
  display: flex;
  gap: 4px;
  align-items: flex-end;

  h1 {
    font-weight: 600;
    font-size: 40px;
  }

  small {
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    padding-bottom: 5px;
  }
  @media(max-width: 480px){
    h1{
      font-size: 32px;
    }
    small{
      font-size: 16px;
    }
  }
  @media(max-width: 255px){
    small{
      display: none;
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: ${bgWhiteColor};
  img {
    padding-left: 15px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    padding-right: 25px;
  }
  @media(max-width: 480px){
  width: 52px;
  height: 26px;
  img {
    width: 20px;
    height: 20px;
    padding-left: 6px;
  }
    p{
      font-size: 12px;
      padding-right: 15px;
    }
  }
`;
