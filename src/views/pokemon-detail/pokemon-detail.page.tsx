import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { Loader } from '../../common/loader';

import { fetchPokemonStart, selectIsPokemonFetching, selectSelectedPokemonObject } from '../../state/pokemon';

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
      <h1>Pokemon Detail - {pokemonName}</h1>
      { pokemon &&
        <ContentContainer>
          <PokemonImageContainer>
            <img src={pokemon.image} alt={pokemonName} />
          </PokemonImageContainer>
          <PokemonDetailContainer>
            <PokemonDetailHeading>Pokemon Details:</PokemonDetailHeading>
            <PokemonDetail>Pokemon: {pokemon.name} ({pokemon.classification}) - {pokemon.number}</PokemonDetail>
            <PokemonDetail>
              Special Attacks:
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
            <PokemonDetailHeading>Battle Info:</PokemonDetailHeading>
            <PokemonDetail>
              Types:
              {pokemon.types.map(
                type => <PokemonDetailListItem key={type}>{type}</PokemonDetailListItem>
              )}
            </PokemonDetail>
            <PokemonDetail>
              Resistant:
              {pokemon.resistant.map(
                resistant => 
                  <PokemonDetailListItem 
                    key={resistant}>
                    {resistant}
                  </PokemonDetailListItem>
              )}
            </PokemonDetail>
            <PokemonDetail>
              Weaknesses:
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
