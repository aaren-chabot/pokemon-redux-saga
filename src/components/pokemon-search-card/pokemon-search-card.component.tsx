import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

interface IPokemonSearchCard {
  pokemon: {
    name: string;
    image: string;
    number: string;
    viewed?: string;
  }
}

const useStyles = makeStyles({
  root: {
    width: 400,
    marginBottom: 20
  },
});

export const PokemonSearchCard = ({ pokemon }: IPokemonSearchCard) => {
  const classes = useStyles();

  return (
    <div>
      <Link to={`/pokemon/${pokemon.name}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={pokemon.name}
              height="240"
              image={pokemon.image}
              title={pokemon.name}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {pokemon.name} - {pokemon.number}
              </Typography>
              {
                pokemon.viewed &&
                <Typography gutterBottom variant="body1" component="p">
                  Last Viewed: {pokemon.viewed}
                </Typography>
              }
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}