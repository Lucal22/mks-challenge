import styled from 'styled-components';
import { bgGrayColor, blackColor } from '../../styles/Colors';

export const Container = styled.div`
  display: flex;
  height: 34px;
  font-weight: 400;
  font-size: 12px;
  color: ${blackColor};
  justify-content: center;
  align-items: center;
  background: ${bgGrayColor};
`;
