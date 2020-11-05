import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export interface ISearchInput {
  search: string;
  handleChange: Function;
  placeholder: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const SearchInput: FC<ISearchInput> = ({ search, handleChange, placeholder = '' }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        label={placeholder}
        autoFocus={true}
        defaultValue={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};
