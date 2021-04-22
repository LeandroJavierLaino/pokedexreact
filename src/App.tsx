import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, { useState } from 'react';

// import CustomAppBar from './components/customAppBar/CustomAppBar';
import Routes from './components/router/Routes';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue
  }
});

export const PokemonFindContext = React.createContext({
  pokemonsFound: [] as BasicPokemonResponse[],
  loadPokemons(pokeFounds: BasicPokemonResponse[]) {}
});

function App() {
  const [pokemons, setPokemons] = useState<BasicPokemonResponse[]>([]);

  const loadPokemons = (pokeFounds: BasicPokemonResponse[]) => {
    setPokemons(pokeFounds);
  };

  return (
    <PokemonFindContext.Provider
      value={{ pokemonsFound: pokemons, loadPokemons }}
    >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PokemonFindContext.Provider>
  );
}

export default App;
