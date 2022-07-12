import styled from 'styled-components';
import { bgBlueColor, bgWhiteColor } from '../../styles/Colors';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${bgBlueColor};
  height: 101px;
  padding: 0 88px;
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
    padding-bottom: 5px;
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
`;
