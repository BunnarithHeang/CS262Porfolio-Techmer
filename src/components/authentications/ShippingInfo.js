import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

const countries = [
  {
    value: 'cam',
    label: 'Cambodia',
  },
  {
    value: 'vn',
    label: 'Vietnam',
  },
  {
    value: 'laov',
    label: 'Laov',
  },
  {
    value: 'jp',
    label: 'Japan',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
    header: {
      alignItems: 'center',
      justify: 'center'
    }
  }),
);

export default function MultilineTextFields() {
  const classes = useStyles();
  const [country, setCurrency] = React.useState('cam');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <h3>Provide your contact</h3>
      </Grid>
      <div>
      
        <TextField
          id="standard-select-currency-native"
          select
          label="Country"
          value={country}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          inputProps={{
            style: {fontSize: 15} 
          }}
          helperText="Please select your country"
        >
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField label="City" /> 
      </div>
      <div>
        <TextField label="Address" />
      </div>
      <div>
        <TextField label="Additional Address" />
      </div>
      <div>
        <TextField label="Zip Code" />
      </div>
      <div>
      <TextField
          label="Phone Number"
          InputProps={{
            startAdornment: <InputAdornment position="start">+855</InputAdornment>,
          }}
        />
      </div>
      
    </form>
    </Grid>
  );
}