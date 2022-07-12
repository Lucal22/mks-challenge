import styled from 'styled-components';
import {
  bgBlueColor,
  bgPriceColor,
  bgWhiteColor,
  textGrayColor,
  textWhiteColor,
} from '../../styles/Colors';

export const Container = styled.section`
  width: 938px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  margin-top: 101px;
  margin-bottom: 127px;
  display: grid;
  row-gap: 31px;
  column-gap: 22px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Product = styled.div`
  max-width: 218px;
  height: 100%;
  border-radius: 8px;
  background-color: ${bgWhiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    width: 100%;
    height: 32px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 600;
    color: ${textWhiteColor};
    border-radius: 0px 0px 8px 8px;
    background-color: ${bgBlueColor};
  }
`;

export const Card = styled.div`
  padding: 18px 11.56px 12px 14px;
  min-height: 282px;
`;

export const Image = styled.div`
img{
  width: 100%;
  height: 100%;
}
  height: 158px;
`;

export const Description = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
  }
  span {
    max-width: 100%;
    max-height: 23px;
    background-color: ${bgPriceColor};
    padding: 4px 7px 4px 6px;
    border-radius: 5px;
    color: ${textWhiteColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
  }

  p {
    font-weight: 300;
    font-size: 10px;
    color: ${textGrayColor};
    line-height: 12px;
  }
`;
