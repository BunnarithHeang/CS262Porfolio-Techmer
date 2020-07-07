import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
];

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          /> */}
          <Autocomplete
            required
            id="firstName"
            name="firstname"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="FirstName" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
              required
              id="firstName"
              name="firstname"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="FirstName" />}
            />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            required
            id="address1"
            name="address1"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Address line 1" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            required
            id="address2"
            name="address2"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Address line 2" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Autocomplete
              required
              id="city"
              name="city"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="City" />}
            />  
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
                required
                id="state"
                name="state"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="State" />}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
              required
              id="zip"
              name="zip"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Zip" />}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
                required
                id="county"
                name="county"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Country" />}
              />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}