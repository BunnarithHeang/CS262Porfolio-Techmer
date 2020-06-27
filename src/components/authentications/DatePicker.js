import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="outlined"
        inputVariant="outlined"
        label="Birthday"
        format="yyyy-MM-dd"
        value={props.data.date_of_birth}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date) =>
          props.setData({ ...props.data, date_of_birth: date })
        }
        error={props.error}
        helperText={props.helperText}
      />
    </MuiPickersUtilsProvider>
  );
}
