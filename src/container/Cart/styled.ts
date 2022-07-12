import styled from 'styled-components';
import {
  bgBlueColor,
  bgWhiteColor,
  textWhiteColor,
  grayColor,
  bgBlackColor,
} from '../../styles/Colors';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 1024px;
  width: 486px;
  background: ${bgBlueColor};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const Header = styled.div`
  margin-bottom: 60px;
`;

export const CartContent = styled.div`
  position: relative;
  padding: 36px 54px 42px 47px;
  min-height: 927px;
  h2 {
    font-weight: 700;
    color: ${textWhiteColor};
    font-size: 27px;
    line-height: 32.91px;
  }
`;

export const BigX = styled.button`
  position: absolute;
  right: 22px;
  top: 36px;
  cursor: pointer;
  background: none;
`;

export const SmallX = styled.button`
  position: absolute;
  top: -6px;
  right: -9px;
  z-index: 99;
  cursor: pointer;
  background: none;
`;

export const CartItems = styled.div`
  position: relative;
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${bgWhiteColor};
  padding: 0 15px;
  border-radius: 8px;
  margin-bottom: 22px;
`;
export const Img = styled.div`
  max-width: 100px;
`;
export const Name = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  max-width: 113px;
`;

export const Qtd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 19px;
  padding: 3px 8px 3px 8px;
  border: 0.3px solid ${grayColor};
  border-radius: 4px;

  p {
    border-left: 0.2px solid ${grayColor};
    border-right: 0.2px solid ${grayColor};
    font-size: 8px;
    text-align: center;
    width: 16px;
  }
`;
export const Dicrease = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
`;
export const Increase = styled.button`
  font-weight: 400;
  font-size: 8px;
  line-height: 14.63px;
`;

export const Price = styled.div`
  width: 62px;
  text-align: start;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const CartResult = styled.div`
  position: absolute;
  bottom: 42px;
  color: ${textWhiteColor};
  font-size: 28px;
  font-weight: 700;
  div {
    width: 385px;
    display: flex;
    justify-content: space-between;
  }
`;

export const CartConfirm = styled.button`
  width: 100%;
  height: 97px;
  font-size: 28px;
  font-weight: 700;
  color: ${textWhiteColor};
  background-color: ${bgBlackColor};
`;
