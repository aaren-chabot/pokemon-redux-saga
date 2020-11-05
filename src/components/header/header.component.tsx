import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { env } from '../../environment/environment';
import { LangSelect } from '../.';
import { useRenderLocale } from '../../util';

import {
  HeaderContainer
} from './header.styles';

export interface IHeader {};

export const Header: FC<IHeader> = () => {
  const [home, history, api] = useRenderLocale(['navigation.home', 'navigation.history', 'navigation.pokemon-api']);

  return (
    <HeaderContainer>
      <Link to="/">{home}</Link>
      <Link to="/search-history">{history}</Link>
      <a href={env.POKEMON_API}>{api}</a>
      <LangSelect />
    </HeaderContainer>
  )
}
