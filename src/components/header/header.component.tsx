import React from 'react';
import { Link } from "react-router-dom";

import { env } from '../../environment/environment';
import { LangSelect } from '../.';

import {
  HeaderContainer
} from './header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/search-history">Viewed History</Link>
      <a href={env.POKEMON_API}>Pokemon Api</a>
      <LangSelect />
    </HeaderContainer>
  )
}
