import React from 'react';
import { Link } from "react-router-dom";

import { POKEMON_API } from '../../environment/environment';

import {
  HeaderContainer
} from './header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/search-history">Viewed History</Link>
      <a href={POKEMON_API}>Pokemon Api</a>
    </HeaderContainer>
  )
}
