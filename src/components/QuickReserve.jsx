import "date-fns";
import React from "react";
import { Button, Card, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  divider: {
    "border-left": "2px solid grey",
    height: "60px",
    marginTop: "10px",
  },
  card: {
    height: "80px",
  },
  inputDate: {
    width: "width: 40px",
  },
}));

export default function QuickReserve() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card className={classes.card}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-evenly'>
          <KeyboardDatePicker
            className={classes.inputDate}
            disableToolbar
            variant='inline'
            format='MM/dd'
            margin='normal'
            id='arrivalpicker'
            label='Arrival'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{ "aria-label": "change date" }}
          />
          <div className={classes.divider}></div>
          <KeyboardDatePicker
            className={classes.inputDate}
            disableToolbar
            variant='inline'
            format='MM/dd'
            margin='normal'
            id='arrivalpicker'
            label='Arrival'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{ "aria-label": "change date" }}
          />
          <div className={classes.divider}></div>

          <KeyboardTimePicker
            className={classes.inputDate}
            margin='normal'
            variant='inline'
            id='time-picker'
            label='Time picker'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <div className={classes.divider}></div>
          <KeyboardTimePicker
            className={classes.inputDate}
            margin='normal'
            variant='inline'
            id='time-picker'
            label='Time picker'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <div className={classes.divider}></div>
          <Button variant='contained'>Reserve</Button>
        </Grid>
      </MuiPickersUtilsProvider>
    </Card>
  );
}
