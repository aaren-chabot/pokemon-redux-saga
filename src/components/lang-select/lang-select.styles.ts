import styled from 'styled-components';
import { elements } from '../../styles';

export const LangSelectEl = styled.select`
	font-size: 16px;
	font-weight: 700;
	line-height: 1.3;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;
  color: ${elements.link.base};
  border: none;
  background: transparent;
  padding: 10px;
  margin: 0;
  display: inline-block;
`;

export const LangOptionEl = styled.option`

`;
