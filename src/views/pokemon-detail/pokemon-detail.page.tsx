import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { Loader } from '../../components';
import { fetchPokemonStart, selectIsPokemonFetching, selectSelectedPokemonObject } from '../../state/pokemon';
import { useRenderLocale } from '../../util';

import {
  ContentContainer,
  PokemonImageContainer,
  PokemonDetailContainer,
  PokemonDetailContainerRight,
  PokemonDetailHeading,
  PokemonDetail,
  PokemonDetailListItem
} from './pokemon-detail.styles';

export const PokemonDetailPage = () => {
  const dispatch = useDispatch();
  const [title, pSubheader, pokemonLabel, specialAttackLabel, 
    sSubheader, typesLabel, resLabel, weaknessLabel] = useRenderLocale(
    ['detail.title', 'detail.primarySubheader', 'detail.details.pokemon', 
    'detail.details.special-attack', 'detail.secondarySubheader', 'detail.details.types', 
    'detail.details.resistant', 'detail.details.weaknesses']);
  const {id: pokemonName} = useParams<{id: string}>();
  const isFetching = useSelector(selectIsPokemonFetching);
  const pokemon = useSelector(selectSelectedPokemonObject);

  useLayoutEffect(() => {
    dispatch(fetchPokemonStart(pokemonName));
  }, [dispatch, pokemonName]);

  if (isFetching) {
    return <Loader />
  }

  return (
    <>
      <h1>{title} - {pokemonName}</h1>
      { pokemon &&
        <ContentContainer>
          <PokemonImageContainer>
            <img src={pokemon.image} alt={pokemonName} />
          </PokemonImageContainer>
          <PokemonDetailContainer>
            <PokemonDetailHeading>{pSubheader}:</PokemonDetailHeading>
            <PokemonDetail>{pokemonLabel}: {pokemon.name} ({pokemon.classification}) - {pokemon.number}</PokemonDetail>
            <PokemonDetail>
              {specialAttackLabel}:
              {pokemon.attacks.special.map(
                attack => 
                  <PokemonDetailListItem key={attack.name}>
                    {attack.name} - {attack.type} - {attack.damage}
                  </PokemonDetailListItem>
                )
              }
            </PokemonDetail>

          </PokemonDetailContainer>
          <PokemonDetailContainerRight>
            <PokemonDetailHeading>{sSubheader}:</PokemonDetailHeading>
            <PokemonDetail>
              {typesLabel}:
              {pokemon.types.map(
                type => <PokemonDetailListItem key={type}>{type}</PokemonDetailListItem>
              )}
            </PokemonDetail>
            <PokemonDetail>
              {resLabel}:
              {pokemon.resistant.map(
                resistant => 
                  <PokemonDetailListItem 
                    key={resistant}>
                    {resistant}
                  </PokemonDetailListItem>
              )}
            </PokemonDetail>
            <PokemonDetail>
              {weaknessLabel}:
              {pokemon.weaknesses.map(
                weakness => 
                  <PokemonDetailListItem 
                    key={weakness}>
                    {weakness}
                  </PokemonDetailListItem>
              )}
            </PokemonDetail>
          </PokemonDetailContainerRight>
        </ContentContainer>
      }
    </>
  );
};
