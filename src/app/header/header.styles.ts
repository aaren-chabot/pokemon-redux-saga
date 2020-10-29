import styled from 'styled-components';
import { colours } from '../../styles';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colours.stroke.base};
  margin-bottom: 20px;
`;
