import styled from 'styled-components';
import {
  bgBlueColor,
  bgWhiteColor,
  textWhiteColor,
  grayColor,
  bgBlackColor,
  bgPriceColor,
} from '../../styles/Colors';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-height: 1024px;
  max-width: 486px;
  background: ${bgBlueColor};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media(max-width: 510px) {
    width: 380px;

  }
  @media(max-width: 340px){
    width: 250px;
  }
`;

export const Header = styled.div`
  margin-bottom: 60px;

  @media(max-width: 340px){
    width: 80%;
    text-align: left;
    margin-bottom: 20px;

    }
`;

export const CartContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 54px 60px 47px;
  min-height: 927px;
  h2 {
    font-weight: 700;
    color: ${textWhiteColor};
    font-size: 27px;
    line-height: 32.91px;
  }
  @media(max-width: 340px){
    padding: 10px ;

    h2 {
      font-size: 20px;
    }
  }
`;

export const BigX = styled.button`
  position: absolute;
  right: 22px;
  top: 36px;
  cursor: pointer;
  background: none;
  @media(max-width: 340px){
    top: 5px;
    right: 5px;
}
`;

export const SmallX = styled.button`
  position: absolute;
  top: -6px;
  right: -9px;
  z-index: 99;
  cursor: pointer;
  background: none;
  p{
    display: none;
  }
  @media(max-width: 510px) {
    top: 3px;
    right: 9px;
    img{
      display: none;
    }
    p{
      display: block;
      font-size: 42px;
      font-weight: 400;
    }
  }
  @media(max-width: 340px){
    font-size: 25px;
}
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

  @media(max-width: 510px) {
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 312px;
  }
  @media(max-width: 340px){
    max-width: 200px;
    height: 250px;
  }
`;
export const Img = styled.img`
  max-width: 100px;
  max-height: 101px;

  @media(max-width: 510px) {
    max-width: 150px;
  max-height: 150px;
  }
`;
export const Name = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  width: 80px;

  @media(max-width: 510px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;

  }
`;

export const Media = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;


@media(max-width: 510px) {
  display: flex;
  justify-content: space-between;
}
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
  @media(max-width: 510px) {
    width: 100px;
    height: 35px;
    p{
    font-size: 20px;
    text-align: center;
    width: 30px;
    }
  }
`;
export const Dicrease = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;

  @media(max-width: 510px) {
      font-size: 24px;

  }
`;
export const Increase = styled.button`
  font-weight: 400;
  font-size: 8px;
  line-height: 14.63px;

  @media(max-width: 510px) {
      font-size: 22px;
  }

`;

export const Price = styled.div`
  min-width: 62px;
  text-align: start;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  @media(max-width: 510px) {
    display: flex;
    background-color: ${bgPriceColor};
    color: ${textWhiteColor};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
`;

export const CartResult = styled.div`
margin-top: 20px;
  position: absolute;
  bottom: 0;
  color: ${textWhiteColor};
  font-size: 28px;
  font-weight: 700;
  div {
    max-width: 385px;
    display: flex;
    justify-content: space-between;
    p{
      padding: 0 20px 0 20px;
    }
  }
  @media(max-width: 340px) {
     margin-top: 50px;
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
