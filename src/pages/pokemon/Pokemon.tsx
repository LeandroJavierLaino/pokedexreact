import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../../lib/api';

function Pokemon() {
  const params: PokemonScreenParams = useParams();

  const [pokemon, setPokemon] = useState<PokemonCard>({
    id: 0,
    name: '',
    sprites: { front_default: '' }
  });

  const classes = useStyles();

  useEffect(() => {
    const retrievePokemon = async () => {
      const poke = await getPokemon(params.name);
      setPokemon({
        id: poke.id,
        name: poke.name,
        sprites: poke.sprites,
        height: poke.height,
        weight: poke.weight,
        skills: poke.abilities.map((ability: AbilitySlot) => {
          return {
            name: ability.ability.name
          };
        }),
        types: poke.types
      });
    };

    retrievePokemon();
  }, [params.name]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={pokemon.name}
        subheader={`#${pokemon.id}`}
        avatar={<Avatar>{pokemon.name[0] + pokemon.name.slice(-1)}</Avatar>}
      />
      <CardMedia style={{ height: 320 }}>
        <img
          className={classes.media}
          src={pokemon.sprites.front_default}
          alt="poke.sprite"
        ></img>
      </CardMedia>
      <CardContent>
        <Divider />
        <Divider />
        <Typography>{'Physical Characteristics'}</Typography>
        <Divider light />
        <Typography>{`Weight : ${pokemon.weight}`}</Typography>
        <Typography>{`Height : ${pokemon.height}`}</Typography>
        <Divider />
        <Divider />
        <Typography>{'Skills'}</Typography>
        <Divider light />
        {pokemon.skills?.map((skill: Skill, index: number) => (
          <Typography>{`[${index}] : ${skill.name}`}</Typography>
        ))}
        <Divider />
        <Divider />
        <Typography>{'Types'}</Typography>
        <Divider light />
        {pokemon.types?.map((type: TypeSlot, index: number) => (
          <Typography>{`[${index}] : ${type.type.name}`}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 450,
      padding: theme.spacing(2),
      margin: theme.spacing(2)
    },
    media: {
      width: 320,
      height: 320
    }
  })
);

export default Pokemon;
