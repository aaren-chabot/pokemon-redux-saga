import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 40px 0 30px;
`;

export const PokemonImageContainer = styled.div`
  margin-right: 40px;
`;

export const PokemonDetailContainer = styled.div`
  padding: 20px 0 0 20px;
  margin-right: 40px
`;

export const PokemonDetailContainerRight = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0 0 20px;
  margin-right: 40px;
  justify-content: space-between;
`;

export const PokemonDetailHeading = styled.h2`
  margin-bottom: 20px;
  width: 100%;
`;

export const PokemonDetail = styled.p`
  margin-bottom: 20px;
  margin-right: 40px;
`;

export const PokemonDetailListItem = styled.li`
  margin-top: 10px;
  padding-left: 20px;
`;
