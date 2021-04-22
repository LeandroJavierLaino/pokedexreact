import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { PokemonFindContext } from '../../App';
import Pokecard from '../../components/pokecard/Pokecard';

function Main() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PokemonFindContext.Consumer>
        {({ pokemonsFound, loadPokemons }) =>
          pokemonsFound.map((pokemonFound: BasicPokemonResponse) => (
            <Pokecard pokeFound={pokemonFound} />
          ))
        }
      </PokemonFindContext.Consumer>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default Main;
